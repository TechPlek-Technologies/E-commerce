const mongoose = require("mongoose");
const { model, models, Schema } = mongoose;

const webpagesSchema = new Schema(
    {
        homePage: {
          carousel: {
            background: Array,
            carouselData: Array,
          },
          banner: {
            title: String,
            subTitle: String,
            description: String,
            url: String,
            image: Array,
          },
          collection: {
            scopeA: {
              title: String,
              url: String,
              image: Array,
            },
            scopeB: {
              title: String,
              url: String,
              image: Array,
            },
            scopeC: {
              title: String,
              url: String,
              image: Array,
            },
            scopeD: {
              title: String,
              url: String,
              image: Array,
            },
          },
        },
        aboutPage: {
          content: String,
        },
        privacyPage: {
          content: String,
        },
        termsPage: {
          content: String,
        },
        returnPolicyPage: {
          content: String,
        },
        faqPage: {
          content: String,
        },
      }
);


module.exports = models.webpage || model("webpage", webpagesSchema);
