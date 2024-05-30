const express = require("express");
const router = express.Router();
const SettingService = require("./settings.service");

router.get("/", getSetting);
router.post("/", postSetting);

function getSetting(req, res, next) {
    SettingService.getSettingService(req, res, next);
}
function postSetting(req, res, next) {
    SettingService.postSettingService(req, res, next);
}


module.exports = router;