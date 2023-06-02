var express = require("express");
const { createVitals, getVitals } = require("../controllers/vitals.controller");
var router = express.Router();

router.post("/createVitals", createVitals);
router.get("/getVitals/:id", getVitals);
module.exports = router;
