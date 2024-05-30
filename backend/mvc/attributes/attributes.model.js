const mongoose = require("mongoose");
const { model, models, Schema } = mongoose;


const attributeSchema = new Schema(
    {
        name: String,
        values: Array,
      }
);

module.exports = models.attribute || model("attribute", attributeSchema);
