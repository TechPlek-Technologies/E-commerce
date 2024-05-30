const express = require("express");
const orderService = require("./order.service");
const router = express.Router();

router.delete("/", deleteOrder);
router.get("/", getPaginatedOrders);
router.post("/", createNewOrder);
router.get("/edit-helper", editOrderHelper);
router.put("/", editOrder);


function deleteOrder(req, res, next) {
    orderService.deleteOrderService(req, res, next);
  }
  function getPaginatedOrders(req, res, next) {
    orderService.getPaginatedOrdersService(req, res, next);
  }
  function createNewOrder(req, res, next) {
    orderService.createNewOrderService(req, res, next);
  }
  function editOrderHelper(req, res, next) {
    orderService.editOrderHelperService(req, res, next);
  }
  function editOrder(req, res, next) {
    orderService.editOrderService(req, res, next);
  }

module.exports = router;