var express = require("express");
const {
  createOrder,
  getAllOrders,
  getOrdersByPatientId,
  deleteOrderById,
} = require("../controllers/orders.controller");

var router = express.Router();

router.post("/createOrder", createOrder);
router.get("/getAllOrders", getAllOrders);
router.get("/getOrdersByPatientId/:patientId", getOrdersByPatientId);
router.delete("/deleteOrder/:id", deleteOrderById);

module.exports = router;
