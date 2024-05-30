const express = require("express");
const router = express.Router();
const ProductService = require("./product.service");

router.get("/", getProduct);
router.put("/clone", cloneProduct);
router.delete("/", deleteProduct);
router.get("/helpers", getProductHelpers);
router.post("/", createProduct);
router.get("/edit-helpers", editProductHelpers);
router.put("/", editProducts);
router.get("/related-products", getRelatedProducts);
router.post("/question", postProductQuestion);
router.put("/question", postProductAnswer);

function getProduct(req, res, next) {
    ProductService.getProductService(req, res, next);
}
function cloneProduct(req, res, next) {
    ProductService.cloneProductService(req, res, next);
}
function deleteProduct(req, res, next) {
    ProductService.deleteProductService(req, res, next);
}
function getProductHelpers(req, res, next) {
    ProductService.getProductHelperService(req, res, next);
}
function createProduct(req, res, next) {
    ProductService.createProductService(req, res, next);
}
function editProductHelpers(req, res, next) {
    ProductService.editProductHelperService(req, res, next);
}
function editProducts(req, res, next) {
    ProductService.editProductService(req, res, next);
}
function getRelatedProducts(req, res, next) {
    ProductService.getRelatedProductService(req, res, next);
}
function postProductQuestion(req, res, next) {
    ProductService.postProductQuestionService(req, res, next);
}
function postProductAnswer(req, res, next) {
    ProductService.answerProductQuestionService(req, res, next);
}



module.exports = router;