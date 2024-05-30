const mongoose = require("mongoose");
const { model, models, Schema } = mongoose;

const couponSchema = new Schema(
    {
        code: { type: String, unique: true },
        amount: Number,
        active: Date,
        expired: Date,
      }
);

module.exports= models.coupon || model("coupon", couponSchema);
