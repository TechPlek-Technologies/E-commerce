const mongoose = require("mongoose");
const { model, models, Schema } = mongoose;


const brandSchema = new Schema(
    {
        brandId: String,
        name: String,
        image: Array,
        slug: String,
        topBrand: { type: Boolean, default: false },
      }
);

module.exports = models.brand || model("brand", brandSchema);
