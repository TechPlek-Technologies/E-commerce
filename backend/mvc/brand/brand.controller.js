const express = require("express");
const router = express.Router();
const BrandService = require("./brand.service");
const verifyToken = require("../../_middleware/verifyToken");

router.get("/",verifyToken, getBrand);
router.post("/",verifyToken, postBrand);
router.put("/",verifyToken, updateBrand);
router.delete("/",verifyToken, deleteBrand);
router.put("/top-brand",verifyToken, changeTopBrand);

function getBrand(req, res, next) {
    BrandService.getBrandService(req, res, next);
}
function postBrand(req, res, next) {
    BrandService.postBrandService(req, res, next);
}
function updateBrand(req, res, next) {
    BrandService.updateBrandService(req, res, next);
}
function deleteBrand(req, res, next) {
    BrandService.deleteBrandService(req, res, next);
}
function changeTopBrand(req, res, next) {
    BrandService.changeTopBrandService(req, res, next);
}


module.exports = router;