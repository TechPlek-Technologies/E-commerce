const mongoose = require("mongoose");
const { model, models, Schema } = mongoose;


const blogCategorySchema = new Schema(
    {
        date: { type: Date, default: Date.now },
        name: String,
        slug: String,
        categoryId:String
      }
);

module.exports = models.blogCategory || model("blogCategory", blogCategorySchema);
