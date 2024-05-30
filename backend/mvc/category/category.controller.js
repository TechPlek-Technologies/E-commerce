const express = require("express");
const router = express.Router();
const categoryService = require("./category.service");
const verifyToken = require("../../_middleware/verifyToken");

router.get("/",verifyToken, getCategory);
router.post("/",verifyToken, postCategory);
router.delete("/",verifyToken, deleteCategory);
router.put("/",verifyToken, updateCategory);
router.put("/top-category",verifyToken, changeTopCategory);
router.post("/sub-category",verifyToken, postSubCategory);
router.put("/sub-category",verifyToken, updateSubCategory);
router.put("/sub-category/delete",verifyToken, deleteSubCategory);
router.post("/child-category",verifyToken, postChildCategory);
router.put("/child-category",verifyToken, updateChildCategory);
router.put("/child-category/delete",verifyToken, deleteChildCategory);



function getCategory(req, res, next) {
    categoryService.getCategoryService(req, res, next);
}
function postCategory(req, res, next) {
    categoryService.createCategoryService(req, res, next);
}
function changeTopCategory(req, res, next) {
    categoryService.changeTopCategoryService(req, res, next);
}
function deleteCategory(req, res, next) {
    categoryService.deleteCategoryService(req, res, next);
}
function updateCategory(req, res, next) {
    categoryService.updateCategoryService(req, res, next);
}
function postSubCategory(req, res, next) {
    categoryService.createSubCategoryService(req, res, next);
}
function updateSubCategory(req, res, next) {
    categoryService.updateSubCategoryService(req, res, next);
}
function deleteSubCategory(req, res, next) {
    categoryService.deleteSubCategoryService(req, res, next);
}
function postChildCategory(req, res, next) {
    categoryService.createChildCategoryService(req, res, next);
}
function updateChildCategory(req, res, next) {
    categoryService.updateChildCategoryService(req, res, next);
}
function deleteChildCategory(req, res, next) {
    categoryService.deleteChildCategoryService(req, res, next);
}


module.exports = router;
