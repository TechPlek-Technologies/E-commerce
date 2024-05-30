const express = require("express");
const router = express.Router();
const AddressService = require("./address.service");
const verifyToken = require("../../_middleware/verifyToken");

router.get("/",verifyToken, getAttributes);
router.post("/", verifyToken, postAddress);

function getAttributes(req, res, next) {
    AddressService.getAddressService(req, res, next);
}
function postAddress(req, res, next) {
    AddressService.postAddressService(req, res, next);
}

module.exports = router;