const express = require("express");
const router = express.Router();
const profileService = require("./profile.service");
const { verifyToken } = require("../../../_middleware/verifyToken");

router.post("/", verifyToken, manageProfile);
router.get("/",verifyToken, getProfile);


function manageProfile(req, res, next) {
  profileService.updateProfile(req, res, next);
}
function getProfile(req, res, next) {
  profileService.getProfileData(req, res, next);
}

module.exports = router;
