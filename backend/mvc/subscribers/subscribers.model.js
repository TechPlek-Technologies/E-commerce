const mongoose = require("mongoose");
const { model, models, Schema } = mongoose;

const newsletterSchema = new Schema(
    {
        subscribers: [
          {
            email: String,
            date: { type: Date, default: Date.now },
          },
        ],
      }
);


module.exports = models.newsletter || model("newsletter", newsletterSchema);
