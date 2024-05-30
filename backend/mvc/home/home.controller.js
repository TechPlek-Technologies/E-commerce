const express = require("express");
const router = express.Router();
const HomeService = require("./home.service");

router.get("/", getHomePage);
router.get("/setting", getSetting);
router.get("/category", getCategory);
router.get("/page", getPage);
router.get("/product", getProduct);
router.get("/search", searchProduct);
router.post("/compare", compareProduct);
router.get("/order", getOrder);
router.get("/track", trackOrder);

function getHomePage(req, res, next) {
  HomeService.getHomePageService(req, res, next);
}
function getSetting(req, res, next) {
  HomeService.getSettingService(req, res, next);
}
function getCategory(req, res, next) {
  HomeService.getCategoryService(req, res, next);
}
function getPage(req, res, next) {
  HomeService.getPageService(req, res, next);
}
function getProduct(req, res, next) {
  HomeService.getProductService(req, res, next);
}
function searchProduct(req, res, next) {
  HomeService.searchProductService(req, res, next);
}
function compareProduct(req, res, next) {
  HomeService.compareProductService(req, res, next);
}
function getOrder(req, res, next) {
  HomeService.getOrderService(req, res, next);
}
function trackOrder(req, res, next) {
  HomeService.trackOrderService(req, res, next);
}

module.exports = router;
