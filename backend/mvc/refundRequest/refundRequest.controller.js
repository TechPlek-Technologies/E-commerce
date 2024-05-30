const express = require("express");
const router = express.Router();
const RefundRequestService = require("./refundRequest.service");

router.post("/", postRefundRequest);
router.get("/", getRefundRequest);
router.put("/", updateRefundRequest);
router.delete("/", deleteRefundRequest);


function postRefundRequest(req, res, next) {
    RefundRequestService.postRefundService(req, res, next);
}
function getRefundRequest(req, res, next) {
    RefundRequestService.getRefundService(req, res, next);
}
function updateRefundRequest(req, res, next) {
    RefundRequestService.updateRefundService(req, res, next);
}
function deleteRefundRequest(req, res, next) {
    RefundRequestService.deleteRefundService(req, res, next);
}

module.exports = router;