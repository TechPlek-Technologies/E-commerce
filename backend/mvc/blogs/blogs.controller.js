const express = require("express");
const blogsModel = require("./blogs.model");
const blogsCategoryModel = require("./blogsCategory.model");
const router = express.Router();

router.get("/", getBlogs);

async function getBlogs(req, res) {
    try {
      const blogs = await blogsModel.find({});
      const categories = await blogsCategoryModel.find({});
      res.status(200).json({ success: true, blogs,categories });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false });
    } 
  }

  module.exports = router;