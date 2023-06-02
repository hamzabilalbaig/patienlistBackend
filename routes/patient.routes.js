var express = require("express");
const {
  createPatientRecord,
  getPatientRecords,
  editPatientRecord,
  getPatientById,
  editallbyId,
  editmedsbyId,
  editmedhxbyId,
  editsurghxbyId,
  editsochxbyId,
} = require("../controllers/patient.controller");

var router = express.Router();

router.post("/patients", createPatientRecord);
router.put("/patients/:id", editPatientRecord);
router.get("/getPatientRecords", getPatientRecords);
router.get("/getPatientById/:id", getPatientById);
router.put("/patientsAll/:id", editallbyId);
router.put("/patientsMeds/:id", editmedsbyId);
router.put("/patientsMedhx/:id", editmedhxbyId);
router.put("/patientsSurghx/:id", editsurghxbyId);
router.put("/patientSochx/:id", editsochxbyId);

module.exports = router;
