const express = require("express");
const router = express.Router();
const ShippingService = require("./shipping.service");

router.get("/", getShippingCharge);
router.post("/", postShippingCharge);
router.put("/", updateShippingCharge);
router.put("/delete", deleteShippingCharge);

function getShippingCharge(req, res, next) {
    ShippingService.getShippingService(req, res, next);
}
function postShippingCharge(req, res, next) {
    ShippingService.postShippingService(req, res, next);
}
function updateShippingCharge(req, res, next) {
    ShippingService.updateShippingService(req, res, next);
}
function deleteShippingCharge(req, res, next) {
    ShippingService.deleteShippingService(req, res, next);
}


module.exports = router;