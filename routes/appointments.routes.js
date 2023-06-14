var express = require("express");
const {
  createAppointments,
  getSlostsByDoctorId,
  getAppointmentsByDate,
  deleteAppointmentsById,
} = require("../controllers/appointments.controller");

var router = express.Router();

router.post("/createAppointments", createAppointments);
router.post("/getSlostsByDoctorId", getSlostsByDoctorId);
router.post("/getAppointmentsByDate", getAppointmentsByDate);
router.delete("/deleteAppointments/:id", deleteAppointmentsById);

module.exports = router;
