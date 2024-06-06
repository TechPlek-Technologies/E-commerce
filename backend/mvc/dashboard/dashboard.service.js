const attributesModel = require("../attributes/attributes.model");
const categoryModel = require("../category/category.model");
const colorsModel = require("../colors/colors.model");
const couponModel = require("../coupon/coupon.model");
const orderModel = require("../orders/order.model");
const userModel = require("../user/user.model");

module.exports = {
    getDashboardService,
};

async function getDashboardService(req, res) {
    try {
        
        const year = new Date().getFullYear();
        const date = new Date(`${year}-01-01`);
        const order = await orderModel.aggregate([
          {
            $match: {
              $and: [
                {
                  orderDate: {
                    $gte: date,
                  },
                },
              ],
            },
          },
          {
            $group: {
              _id: {
                year: { $year: "$orderDate" },
                month: { $month: "$orderDate" },
              },
              results: { $count: {} },
            },
          },
        ]);

        const salesByMonth = await orderModel.aggregate([
          {
            $match: {
              orderDate: {
                $gte: new Date(`${year}-01-01`),
                $lt: new Date(`${year + 1}-01-01`),
              },
            },
          },
          {
            $group: {
              _id: {
                year: { $year: "$orderDate" },
                month: { $month: "$orderDate" },
              },
              total: { $sum: "$payAmount" },
            },
          },
          {
            $group: {
              _id: "$_id.year",
              monthlySales: {
                $push: {
                  month: "$_id.month",
                  total: "$total",
                },
              },
            },
          },
          {
            $project: {
              _id: 0,
              year: "$_id",
              monthlySales: 1,
            },
          },
        ]);

        const orderCountByStatus = await orderModel.aggregate([
          {
            $match: {
              orderDate: {
                $gte: new Date(`${year}-01-01`),
                $lt: new Date(`${year + 1}-01-01`),
              },
            },
          },
          {
            $group: {
              _id: "$status",
              count: { $sum: 1 },
            },
          },
        ]);

        const countByStatus = {
          year: year,
          orderCounts: {
            Pending: 0,
            "In Progress": 0,
            Packaged: 0,
            Shipped: 0,
            Delivered: 0,
            Canceled: 0,
          },
        };

        // Populate the result object with the counts
        orderCountByStatus.forEach((statusCount) => {
          const status = statusCount._id;
          const count = statusCount.count;
          countByStatus.orderCounts[status] = count;
        });

        const totalOrder = await orderModel.estimatedDocumentCount();
        const totalUser = await userModel.estimatedDocumentCount();
        const totalCategory = await categoryModel.estimatedDocumentCount();
        const totalColor = await colorsModel.estimatedDocumentCount();
        const totalCoupon = await couponModel.estimatedDocumentCount();
        const totalAttribute = await attributesModel.estimatedDocumentCount();
        res.status(200).json({
          success: true,
          order,
          salesByMonth,
          totalOrder,
          totalUser,
          totalCategory,
          totalColor,
          totalCoupon,
          totalAttribute,
          orderCountByStatus: countByStatus,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({ success: false });
      } 
}


