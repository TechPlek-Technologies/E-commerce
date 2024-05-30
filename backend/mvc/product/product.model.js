const mongoose = require("mongoose");
const { model, models, Schema } = mongoose;

const reviewSchema = new Schema(
  {
    date: { type: Date, default: Date.now },
    userName: String,
    email: { type: String, match: /.+\@.+\..+/ },
    rating: { type: Number, min: 1, max: 5 },
    comment: String,
  },
  { _id: false }
);

const questionSchema = new Schema(
  {
    date: { type: Date, default: Date.now },
    userName: String,
    email: { type: String, match: /.+\@.+\..+/ },
    question: String,
    answer: { type: String, default: "" },
  },
  { _id: false }
);

const productSchema = new Schema(
  {
    date: { type: Date, default: Date.now },
    name: String,
    slug: String,
    productId: String,
    unit: String,
    unitValue: String,
    price: Number,
    discount: Number,
    description: String,
    shortDescription: String,
    type: String,
    image: Array,
    gallery: Array,
    categories: Array,
    subcategories: Array,
    childCategories: Array,
    brand: String,
    currency: String,
    trending: { type: Boolean, default: false },
    new: { type: Boolean, default: false },
    bestSelling: { type: Boolean, default: false },
    quantity: Number,
    sku: String,
    colors: Array,
    attributes: Array,
    variants: Array,
    attributeIndex: String,
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
    ],
    question: [
      {
        date: { type: Date, default: Date.now },
        userName: String,
        email: String,
        question: String,
        answer: String,
      },
    ],
    vat: { type: Number, default: 0 },
    tax: { type: Number, default: 0 },
  }
);

productSchema.index({ slug: 1, productId: 1 }, { unique: true });

module.exports = models.product || model("product", productSchema);
