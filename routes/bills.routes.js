var express = require("express");
const {
  createBills,
  getBillsById,
} = require("../controllers/bills.controller");
var router = express.Router();

router.post("/createBills", createBills);
router.get("/getBillsById/:id", getBillsById);

module.exports = router;
