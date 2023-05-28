var express = require("express");
const { createPatientRecord } = require("../controllers/patient.controller");

var router = express.Router();

router.post("/patients", createPatientRecord);

module.exports = router;
