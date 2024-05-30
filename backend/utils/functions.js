const customId = require("custom-id-new");
const { unlink } = require("fs/promises");
 
 function convertToSlug(string, randomId) {
    const str = string
      .toString()
      .trim()
      .toLowerCase()
      .replace("&", "and")
      .replace(/\s+/g, "-")
      .replace(/[^\p{L}\p{N}\p{M}-]+/gu, "-")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  
    if (randomId) {
      const cid = customId({ randomLength: 2, lowerCase: true });
      const slug = `${str}-${cid}`;
      return slug;
    } else {
      return str;
    }
  }

  async function deleteFiles(fileList) {
    try {
 
        for (let i = 0; i < fileList.length; i++) {
          const file = fileList[i];
          const filepath = `../uploads/${file.Key}`;
          await unlink(filepath);
        }
      
    } catch (err) {
      console.log(err);
    }
  }

   async function deleteOne(file) {
    try {
      const filePath = `./uploads/${file}`;
      await unlink(filePath);
    } catch (err) {
      console.log(err);
    }
  }
  module.exports={convertToSlug,deleteFiles,deleteOne}