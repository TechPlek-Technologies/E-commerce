const mongoose = require("mongoose");
const { model, models, Schema } = mongoose;


const colorSchema = new Schema(
    {
        name: String,
        value: String,
      }
);

module.exports = models.color || model("color", colorSchema);
