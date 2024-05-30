const mongoose = require("mongoose");
const { model, models, Schema } = mongoose;


const orderSchema = new Schema(
  {
    orderId: String,
    orderDate: { type: Date, default: Date.now },
    products: Array,
    status: String,
    paymentStatus: String,
    billingInfo: Object,
    shippingInfo: Object,
    deliveryInfo: Object,
    paymentMethod: String,
    paymentId: String,
    totalPrice: Number,
    payAmount: Number,
    coupon: Object,
    orderStatus: String,
    paymentStatus: String,
    vat: { type: Number, default: 0 },
    tax: { type: Number, default: 0 },
    new: { type: Boolean, default: true },
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  },
  {
    timestamps: true,
  }
);

module.exports = models.order || model("order", orderSchema);
