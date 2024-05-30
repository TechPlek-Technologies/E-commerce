const { dbConnect, dbDisconnect } = require("../../utils/dbConnect");
const { parseForm } = require("../../utils/parseForm");
const notificationModel = require("../notification/notification.model");
const orderModel = require("./order.model");
const { eachSeries } = require("async");
const customId=require("custom-id-new");
const productModel = require("../product/product.model");
const userModel = require("../user/user.model");

module.exports = {
  getPaginatedOrdersService,
  deleteOrderService,
  createNewOrderService,
  editOrderHelperService,
  editOrderService
};

async function getPaginatedOrdersService(req, res) {
  try {
    await dbConnect();
    const { pageNumber = 1, pageSize = 10, queryText } = req.query;
    let order = [];
    let total = 0;
    if (queryText && queryText.length > 0) {
      // Use a regular expression to perform a case-insensitive search
      const regex = new RegExp(queryText, "i");
      order = await orderModel.find({ orderId: regex });
      total = order.length;
    } else {
      total = await orderModel.countDocuments();
      const skip = (pageNumber - 1) * pageSize;
      order = await orderModel
        .find()
        .sort({ orderDate: -1 })
        .skip(skip)
        .limit(Number(pageSize));
    }
    res.status(200).json({ success: true, order, total });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  } finally {
    await dbDisconnect();
  }
}

async function createNewOrderService(req, res) {
  try {
    await dbConnect();
    const data = req.body;
    const { checkoutData } = data;
    const {
      coupon,
      products,
      billingInfo,
      shippingInfo,
      deliveryInfo,
      paymentData,
    } = checkoutData;
    await decrementQty(products);
    const price = await getTotalPrice(products);
    const vat = await getTotalVat(products);
    const tax = await getTotalTax(products);
    const discount = discountPrice(coupon.discount, price);
    const payAmount =
      Math.round(
        (price + vat + tax + (deliveryInfo.cost || 0) - discount) * 10
      ) / 10;
    const orderId = `R${customId({ randomLength: 4, upperCase: true })}`;
    const paymentStatus =
      paymentData.method === "Cash On Delivery" ? "Unpaid" : "Paid";
    const orderData = {
      orderId,
      products,
      status: "Pending",
      billingInfo,
      shippingInfo,
      deliveryInfo,
      paymentMethod: paymentData.method,
      paymentStatus,
      paymentId: paymentData.id,
      totalPrice: price,
      payAmount,
      coupon,
      vat,
      tax,
    };
    const createdOrder = await orderModel.create(orderData);


    if (data.id) {
      await userModel.findByIdAndUpdate(data.id, {
        $push: { orders: createdOrder._id },
      });
    }
    const message = `<p>A new order (<a href="/dashboard/orders/${createdOrder._id}" target="_blank">${createdOrder.orderId}</a>) has been placed</p>`;
    await notificationModel.create({ message });
    res.status(200).json({ success: true, createdOrder });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  } finally {
    await dbDisconnect();
  }
}

async function deleteOrderService(req, res) {
  try {
    await dbConnect();
    const id = req.query.id;
    await orderModel.findByIdAndDelete(id);
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  } finally {
    await dbDisconnect();
  }
}
async function editOrderHelperService(req, res) {
  try {
    await dbConnect();
    const id = req.query.id;
    const order = await orderModel.findById(id);
    if (order.new) {
      order.new = false;
      await order.save();
    }
    res.status(200).json({ success: true, order });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  } finally {
    await dbDisconnect();
  }
}
async function editOrderService(req, res) {
  try {
    await dbConnect();
    const id = req.query.id;
    const _or = await orderModel.findByIdAndUpdate(id, {
      status: req.query.order_status,
      paymentStatus: req.query.payment_status,
    });
    let _msg = "";
    req.query.action === "payment"
      ? (_msg = `<p>Order (<a href="/dashboard/orders/${_or._id}" target="_blank">${_or.orderId}</a>) payment status changed to (${req.query.payment_status})</p>`)
      : (_msg = `<p>Order (<a href="/dashboard/orders/${_or._id}" target="_blank">${_or.orderId}</a>) status changed to (${req.query.order_status})</p>`);
    await notificationModel.create({ message: _msg });
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  } finally {
    await dbDisconnect();
  }
}





// helpers
const decrementQty = async (products) => {
  eachSeries(
    products,
    async (item, done) => {
      if (item.color.name || item.attribute.name) {
        const product = await productModel.findById(item._id);
        if (product) {
          const colorName = item.color.name;
          const attrName = item.attribute.name;
          const variant = product.variants.find(
            (item) => item.color === colorName && item.attr === attrName
          );
          if (variant.qty != -1) {
            variant.qty = variant.qty - item.qty;
            product.markModified("variants");
            await product.save(done);
          }
        }
      } else {
        const product = await productModel.findById(item._id);
        if (product && product.quantity != -1) {
          product.quantity = product.quantity - item.qty;
          await product.save(done);
        }
      }
    },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

function checkPercentage(number, percentage) {
  return (number * percentage) / 100;
}

const getTotalPrice = async (products) => {
  const price = await products.reduce(
    (accumulator, item) => accumulator + item.qty * item.price,
    0
  );
  return Math.round(price * 10) / 10;
};

const getTotalVat = async (products) => {
  const vat = await products.reduce(
    (accumulator, item) =>
      accumulator + checkPercentage(item.qty * item.price, item.vat),
    0
  );
  return +vat;
};

const getTotalTax = async (products) => {
  const tax = await products.reduce(
    (accumulator, item) =>
      accumulator + checkPercentage(item.qty * item.price, item.tax),
    0
  );
  return +tax;
};

const discountPrice = (discount, total) => {
  const price = (discount / 100) * total;
  return Math.round(price * 10) / 10;
};