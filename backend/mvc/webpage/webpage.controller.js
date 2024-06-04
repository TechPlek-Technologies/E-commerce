const express = require("express");
const router = express.Router();
const WebpageService = require("./webpage.service");

router.get("/", getPage);
router.post("/", postPage);
router.post("/home", postHomePage);
router.delete("/home", deleteHomePage);
router.put("/home", updateHomePage); 

async function getPage(req, res, next) {
   await WebpageService.getPageService(req, res, next);
}
function postPage(req, res, next) {
    WebpageService.postPageService(req, res, next);
}
function postHomePage(req, res, next) {
    WebpageService.postHomePageService(req, res, next);
}
function deleteHomePage(req, res, next) {
    WebpageService.deleteHomePageCarouselService(req, res, next);
}
function updateHomePage(req, res, next) {
    WebpageService.updateHomePageCarouselService(req, res, next);
}

module.exports = router;