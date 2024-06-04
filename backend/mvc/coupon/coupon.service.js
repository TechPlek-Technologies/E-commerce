const { dbConnect, dbDisconnect } = require("../../utils/dbConnect");
const couponModel = require("./coupon.model");

module.exports = {
  getCouponService,
  postCouponService,
  updateCouponService,
  deleteCouponService,
  applyCouponService
};

async function getCouponService(req, res) {
    try {
        
        const coupon = await couponModel.find({});
        res.status(200).json({ success: true, coupon });
      } catch (err) {
        console.log(err);
        res.status(500).json({ success: false });
      } 
}
async function postCouponService(req, res) {
    try {
        
        const formData = req.body;

        console.log(formData);
        const coupon = {
          code: formData.code.trim(),
          amount: Number(formData.amount),
          active: formData.active,
          expired: formData.expired,
        };
        await couponModel.create(coupon);
        res.status(200).json({ success: true });
      } catch (err) {
        console.log(err);
        if (err.code === 11000) {
          return res.status(200).json({
            success: false,
            dup: true,
          });
        }
        res.status(500).json({ success: false });
      } 
}
async function updateCouponService(req, res) {
    try {
        
        const data =req.body;
        const couponData = {
          code: data.code.trim(),
          amount: data.amount,
          active: data.active,
          expired: data.expired,
        };
        await couponModel.findByIdAndUpdate(data.id, couponData);
        res.status(200).json({ success: true });
      } catch (err) {
        console.log(err);
        if (err.code === 11000) {
          return res.status(200).json({
            success: false,
            dup: true,
          });
        }
        res.status(400).json({ success: false });
      } 
}
async function deleteCouponService(req, res) {
    try {
        
        const id = req.query.id;
        await couponModel.findByIdAndDelete(id);
        res.status(200).json({ success: true });
      } catch (err) {
        console.log(err);
        res.status(500).json({ success: false });
      } 
}
async function applyCouponService(req, res) {
  try {
    
    const coupon = await couponModel.findOne({ code: req.body.code });
    if (coupon) {
      const active = dateFormat(coupon.active);
      const expired = dateFormat(coupon.expired);
      const today = dateFormat(new Date());
      if (active <= today && today <= expired) {
        res.status(200).json({
          success: true,
          message: `Coupon Applied ${coupon.code}`,
          discount: coupon.amount,
          code: coupon.code,
        });
      } else {
        res
          .status(200)
          .json({ success: false, message: "Coupon Code Expired" });
      }
    } else {
      res.status(200).json({ success: false, message: "Invalid Coupon" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
}

function dateFormat(date) {
  //YYYY-MM-DD
  const data = new Date(date);
  const year = data.getFullYear();
  const month = data.getMonth() + 1;
  const day = data.getDate();
  return new Date(`${year}, ${month}, ${day}`);
}