const mongoose = require("mongoose");
const { model, models, Schema } = mongoose;


const addressSchema = new Schema(
    {
        name: String,
        email: String,
        phone: String,
        house: String,
        city: String,
        state: String,
        zipCode: String,
        country: String,
        user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
        addressType: String,
        addressTitle: String,
      }
);

module.exports = models.address || model("address", addressSchema);
