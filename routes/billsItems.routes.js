var express = require("express");
const {
  createBillsItems,
  getBillsItems,
} = require("../controllers/billsItems.controller");
var router = express.Router();

router.post("/createBillsItems", createBillsItems);
router.get("/getBillsItems/:invoiceId", getBillsItems);
module.exports = router;
