var express = require("express");
const {
  createPatientRecord,
  getPatientRecords,
  editPatientRecord,
  getPatientById,
} = require("../controllers/patient.controller");

var router = express.Router();

router.post("/patients", createPatientRecord);
router.put("/patients/:id", editPatientRecord);
router.get("/getPatientRecords", getPatientRecords);
router.get("/getPatientById/:id", getPatientById);

module.exports = router;
