const mongoose = require("mongoose");
const { model, models, Schema } = mongoose;

const isStaffSchema = new Schema({
  status: { type: Boolean, default: false },
  surname: String,
  permissions: [String],
});

const userSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true },
    phone: String,
    house: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
    image: String,
    hash: String,
    salt: String,
    isAdmin: { type: Boolean, default: false },
    isStaff: isStaffSchema,
    emailVerified: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    orders: [{ type: Schema.Types.ObjectId, ref: "order" }],
    favorite: [{ type: Schema.Types.ObjectId, ref: "product" }],
    refundRequest: [{ type: Schema.Types.ObjectId, ref: "refundRequest" }],
    address: [{ type: Schema.Types.ObjectId, ref: "address" }],
  },
  {
    timestamps: true,
  }
);

module.exports = models.user || model("user", userSchema);
