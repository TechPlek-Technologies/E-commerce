const express = require("express");
const router = express.Router();
const fileUploadService = require("./fileupload.service");
const verifyToken = require("../../_middleware/verifyToken");


router.get("/:filename", readFile);
router.post("/",verifyToken, uploadFile);
router.delete("/", verifyToken,deleteFile);


function readFile(req, res, next) {
    fileUploadService.readFileService(req, res, next);
}
function uploadFile(req, res, next) {
    fileUploadService.uploadFileService(req, res, next);
}
function deleteFile(req, res, next) {
    fileUploadService.deleteFileService(req, res, next);
}


module.exports = router;