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

router.route("/patients").post(createPatientRecord);
router.route("/patients/:id").put(editPatientRecord);
router.route("/getPatientRecords").get(getPatientRecords);
router.route("/getPatientById/:id").get(getPatientById);
router.route("/patientsAll/:id").put(editallbyId);
router.route("/patientsMeds/:id").put(editmedsbyId);
router.route("/patientsMedhx/:id").put(editmedhxbyId);
router.route("/patientsSurghx/:id").put(editsurghxbyId);
router.route("/patientSochx/:id").put(editsochxbyId);

module.exports = router;
