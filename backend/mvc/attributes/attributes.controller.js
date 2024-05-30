const express = require("express");
const router = express.Router();
const AttributeService = require("./attributes.service");
const verifyToken = require("../../_middleware/verifyToken");

router.get("/",verifyToken, getAttributes);
router.get("/id",verifyToken, getAttributesbyId);
router.post("/",verifyToken, postAttributes);
router.put("/",verifyToken, updateAttributes);
router.delete("/",verifyToken, deleteAttributes);

function getAttributesbyId(req, res, next) {
    AttributeService.getAttributeByIdService(req, res, next);
}
function getAttributes(req, res, next) {
    AttributeService.getAttributeService(req, res, next);
}
function postAttributes(req, res, next) {
    AttributeService.postAttributeService(req, res, next);
}
function updateAttributes(req, res, next) {
    AttributeService.updateAttributeService(req, res, next);
}
function deleteAttributes(req, res, next) {
    AttributeService.deleteAttributeService(req, res, next);
}


module.exports = router;