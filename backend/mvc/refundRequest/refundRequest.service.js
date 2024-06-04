const { dbConnect, dbDisconnect } = require("../../utils/dbConnect");
const { deleteFiles } = require("../../utils/functions");
const orderModel = require("../orders/order.model");
const refundModel = require("./refundRequest.model");

module.exports = {
  postRefundService,
  getRefundService,
  updateRefundService,
  deleteRefundService
};

async function postRefundService(req, res) {
  try {
    
    const data = req.body;
    id = data.id;
    data.id = id;
    const createdRefund = await refundModel.create(data);
    const orderData = await orderModel.findOne({ orderId: data.orderId });
    if (orderData) {
      const index = orderData.products.findIndex(
        (x) => x._id === data.product.id
      );
      if (index > -1) {
        orderData.products[index].refundRequest = true;
        orderData.markModified("products");
        await orderData.save();
      }
    }
    await user.updateOne(
      { _id: session.user.id },
      { $push: { refundRequest: createdRefund._id } }
    );
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(200).json({ success: false });
  } 
}
async function getRefundService(req, res) {
  try {
    
    const data = await refundModel
      .find({})
      .sort({ _id: -1 })
      .populate("userId", {
        name: 1,
        email: 1,
        phone: 1,
      })
      .populate("product.id", {
        image: 1,
      });
    res.status(200).json({ success: true, data });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  } 
}
async function updateRefundService(req, res) {
  try {
    
    const { id, status, note } = req.body;
    const refundData = await refundModel.findById(id);
    if (!refundData || refundData.status === "Approved") {
      throw new Error(`Illigal Request with id ${id}`);
    }
    refundData.status = status;
    refundData.note = note;
    await refundData.save();
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(200).json({ success: false });
  } 
}
async function deleteRefundService(req, res) {
  try {
    
    const data = await refundModel.findById(req.query.id);
    const icon = [{ Key: data.image[0]?.name }];
    await deleteFiles(icon);
    await data.deleteOne();
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  } 
}
