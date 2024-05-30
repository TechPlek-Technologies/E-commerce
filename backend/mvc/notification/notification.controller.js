const express = require("express");
const router = express.Router();
const NotificationService = require("./notification.service");

router.get("/", getNotification);
router.delete("/", deleteNotification);


function getNotification(req, res, next) {
    NotificationService.getNotificationService(req, res, next);
}
function deleteNotification(req, res, next) {
    NotificationService.deleteNotificationService(req, res, next);
}

module.exports = router;