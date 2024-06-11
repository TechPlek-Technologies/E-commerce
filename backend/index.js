require("rootpath")();
require('dotenv').config()
const express = require("express");
const errorHandler = require("_middleware/error-handler");
const cors=require("cors")
const cookieParser = require('cookie-parser');
const connection = require("./utils/connection");

const app = express();
app.use(express.json());
const corsOptions = {
  origin: ["https://e-commerce-1-0ff7.onrender.com","https://e-commerce-yqol.onrender.com"], // Replace with your client URL
  credentials: true, // This allows the server to accept cookies and other credentials
};

app.use(cors(corsOptions))
app.use(cookieParser());
await connection();
app.use("/auth", require("./mvc/user/auth/auth.controller"));
app.use("/profile", require("./mvc/user/profile/profile.controller"));
app.use("/dashboard", require("./mvc/dashboard/dashboard.controller"));
app.use("/address", require("./mvc/address/address.controller"));
app.use("/category", require("./mvc/category/category.controller"));
app.use("/orders", require("./mvc/orders/order.controller"));
app.use("/attributes", require("./mvc/attributes/attributes.controller"));
app.use("/colors", require("./mvc/colors/colors.controller"));
app.use("/brands", require("./mvc/brand/brand.controller"));
app.use("/coupons", require("./mvc/coupon/coupon.controller"));
app.use("/products", require("./mvc/product/product.controller"));
app.use("/shipping-charge", require("./mvc/shippingCharge/shipping.controller"));
app.use("/notification", require("./mvc/notification/notification.controller"));
app.use("/subscribers", require("./mvc/subscribers/subscribers.controller"));
app.use("/refund", require("./mvc/refundRequest/refundRequest.controller"));
app.use("/setting", require("./mvc/settings/settings.controller"));
app.use("/page", require("./mvc/webpage/webpage.controller"));
app.use("/uploads", require("./mvc/fileUpload/fileupload.controller"));

app.use("/home", require("./mvc/home/home.controller"));

app.use(errorHandler);

// start server
const port =
  process.env.NODE_ENV === "production" ? process.env.PORT  : process.env.DEV_PORT;

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});

