const mongoose = require("mongoose");
const { model, models, Schema } = mongoose;

const notificationSchema = new Schema(
    {
        message: String,
        createdAt: { type: Date, expires: 604800, default: Date.now },
      }
);


module.exports = models.notification || model("notification", notificationSchema);
