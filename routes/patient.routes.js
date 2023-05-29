var express = require("express");
const {
  createPatientRecord,
  getPatientRecords,
} = require("../controllers/patient.controller");

var router = express.Router();

router.post("/patients", createPatientRecord);
router.get("/getPatientRecords", getPatientRecords);

module.exports = router;
