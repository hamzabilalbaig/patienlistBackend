var express = require("express");
const { createBills } = require("../controllers/bills.controller");
var router = express.Router();

router.post("/createBills", createBills);

module.exports = router;
