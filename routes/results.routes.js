var express = require("express");
const {
  createResults,
  getResults,
} = require("../controllers/results.controller");
var router = express.Router();

router.post("/createResults", createResults);
router.get("/getResults/:id", getResults);
module.exports = router;
