const mongoose = require("mongoose");
const { model, models, Schema } = mongoose;

const ShippingChargeSchema = new Schema(
  {
    area: [
      {
        name: String,
        price: Number,
      },
    ],
    internationalCost: Number,
  }
);

module.exports= models.shippingCharge ||
model("shippingCharge", ShippingChargeSchema);
