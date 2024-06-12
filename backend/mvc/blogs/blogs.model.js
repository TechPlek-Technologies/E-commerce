const mongoose = require("mongoose");
const { model, models, Schema } = mongoose;


const blogSchema = new Schema(
   {
  date: { type: Date, default: Date.now },
  name: String,
  slug: String,
  blogId: String,
  description: String,
  shortDescription: String,
  seo: {
    title: String,
    description: String,
    image: Array,
  },
  review: [
    {
      date: { type: Date, default: Date.now },
      userName: String,
      email: String,
      rating: Number,
      comment: String,
    },
  ]
}
);

module.exports = models.blog || model("blog", blogSchema);
