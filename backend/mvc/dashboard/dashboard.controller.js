const express = require("express");
const router = express.Router();
const DashboardService = require("./dashboard.service");
const {verifyToken} = require("../../_middleware/verifyToken");

router.get("/", verifyToken, getDashboard);


function getDashboard(req, res, next) {
    DashboardService.getDashboardService(req, res, next);
}

module.exports = router;