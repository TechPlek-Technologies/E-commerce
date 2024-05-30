const express = require("express");
const router = express.Router();
const SubscriberService = require("./subscribers.service");

router.get("/", getSubscriber);
router.post("/", postSubscriber);
router.delete("/", deleteSubscriber);


function getSubscriber(req, res, next) {
    SubscriberService.getSubscriberService(req, res, next);
}
function postSubscriber(req, res, next) {
    SubscriberService.createSubscriberService(req, res, next);
}
function deleteSubscriber(req, res, next) {
    SubscriberService.deleteSubscriberService(req, res, next);
}

module.exports = router;