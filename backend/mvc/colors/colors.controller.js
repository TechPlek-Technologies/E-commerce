const express = require("express");
const router = express.Router();
const ColorService = require("./colors.service");
const verifyToken = require("../../_middleware/verifyToken");

router.get("/", verifyToken,getColors);
router.post("/",verifyToken, postColors);
router.put("/",verifyToken, updateColors);
router.delete("/",verifyToken, deleteColors);

function getColors(req, res, next) {
    ColorService.getColorService(req, res, next);
}
function postColors(req, res, next) {
    ColorService.postColorService(req, res, next);
}
function updateColors(req, res, next) {
    ColorService.updateColorService(req, res, next);
}
function deleteColors(req, res, next) {
    ColorService.deleteColorService(req, res, next);
}


module.exports = router;