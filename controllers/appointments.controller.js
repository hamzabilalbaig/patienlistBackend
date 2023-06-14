const db = require("../models");

exports.createAppointments = async (req, res) => {
  try {
    const appointments = await db.sequelize.models.appointments.create({
      patientId: req.body.patientId,
      doctorId: req.body.doctorId,
      date: req.body.date,
      duration: req.body.duration,
      slot: req.body.slot,
      patientName: req.body.patientName,
      doctorName: req.body.doctorName,
    });
    res.status(200).json({
      success: true,
      appointments,
      message: "appointments record created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};

exports.getSlostsByDoctorId = async (req, res) => {
  try {
    const appointments = await db.sequelize.models.appointments.findAll({
      where: { doctorId: req.body.doctorId, date: req.body.date },
    });
    res.status(200).json({
      success: true,
      appointments,
      message: "appointments record created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};

exports.getAppointmentsByDate = async (req, res) => {
  try {
    if (req.body.date) {
      const appointments = await db.sequelize.models.appointments.findAll({
        where: { date: req.body.date, doctorId: req.body.doctorId },
      });
      res.status(200).json({
        success: true,
        appointments,
        message: "appointments record created successfully",
      });
    } else {
      const appointments = await db.sequelize.models.appointments.findAll();
      res.status(200).json({
        success: true,
        appointments,
        message: "appointments record created successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};

exports.deleteAppointmentsById = async (req, res) => {
  try {
    const appointments = await db.sequelize.models.appointments.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({
      success: true,
      appointments,
      message: "appointments record deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};
