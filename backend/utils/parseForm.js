const { formidable,Formidable } = require("formidable");

function parseForm(req) {
  return new Promise((resolve, reject) => {
    const form = new formidable({
      keepExtensions: true,
      uploadDir: "../uploads",
    });
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      const data = { fields: fields, files: files };
      resolve(data);
    });
  });
}
function parseImage(req) {
  return new Promise((resolve, reject) => {
    const form = new Formidable({
      keepExtensions: true,
      uploadDir: "./uploads",
    });
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      const data = { fields: fields, files: files };
      resolve(data);
    });
  });
}

 function parseFormMultiple(req) {
  return new Promise((resolve, reject) => {
    const form = formidable({
      multiples: true,
      keepExtensions: true,
      uploadDir: "./uploads",
    });
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      const data = { field: fields, file: files };
      resolve(data);
    });
  });
}

module.exports = { parseForm, parseFormMultiple,parseImage };
