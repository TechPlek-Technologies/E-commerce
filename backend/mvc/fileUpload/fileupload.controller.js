const express = require("express");
const router = express.Router();
const fileUploadService = require("./fileupload.service");

router.get("/:filename", readFile);
router.post("/", uploadFile);
router.delete("/",deleteFile);


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