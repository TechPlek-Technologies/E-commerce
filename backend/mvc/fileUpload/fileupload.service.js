const {  deleteOne } = require("../../utils/functions");
const { parseForm, parseImage } = require("../../utils/parseForm");
const fs = require('fs');
const path = require('path');

module.exports = {
    uploadFileService,
    deleteFileService,
    readFileService 
};

async function uploadFileService(req, res) {
    try {
        const result = await parseImage(req);
        const imageName = result.files.file.newFilename;
        const url = `${process.env.URL}/uploads/${imageName}`;
        res.status(200).json({ success: true, name: imageName, url });
      } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, err: err.message });
      }
}
async function deleteFileService(req, res) {
    try {
        const { query } = req;
        await deleteOne(query.name);
        res.status(200).json({ success: true, err: null });
      } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, err: err.message });
      } 

}
async function readFileService(req, res) {
    const { filename } = req.params;
    const filePath = `./uploads/${filename}`;
    fs.readFile(filePath, (err, data) => {
        if (err) {
          res.status(404).send("File not found");
          return;
        }
    
       
        res.send(data);
      });
}