const express = require("express");
const router = express.Router();
const CouponService = require("./coupon.service");
const {verifyToken} = require("../../_middleware/verifyToken");

router.get("/",verifyToken, getCoupon);
router.post("/", verifyToken, postCoupon);
router.put("/", verifyToken, updateCoupon);
router.delete("/", verifyToken, deleteCoupon);
router.post("/apply", verifyToken, applyCoupon);

function getCoupon(req, res, next) {
    CouponService.getCouponService(req, res, next);
}
function postCoupon(req, res, next) {
    CouponService.postCouponService(req, res, next);
}
function updateCoupon(req, res, next) {
    CouponService.updateCouponService(req, res, next);
}
function deleteCoupon(req, res, next) {
    CouponService.deleteCouponService(req, res, next);
}
function applyCoupon(req, res, next) {
    CouponService.applyCouponService(req, res, next);
}


module.exports = router;