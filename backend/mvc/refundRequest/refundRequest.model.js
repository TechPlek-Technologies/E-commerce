const mongoose = require("mongoose");
const { model, models, Schema } = mongoose;

const refundRequestSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  product: {
    id: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
    name: String,
    color: String,
    attribute: String,
    price: Number,
    qty: Number,
    vat: Number,
    tax: Number,
  },
  refundReason: String,
  status: String,
  attachments: [],
  refundAmount: Number,
  orderId: String,
  note: String,
  date: { type: Date, default: Date.now },
});

module.exports =
  models.refundRequest || model("refundRequest", refundRequestSchema);
