const db = require("../models");
const { calculateAge } = require("../utils/utilityFunctions");

exports.createPatientRecord = async (req, res) => {
  try {
    console.log(req);
    const age = calculateAge(req.body.dateOfBirth);
    const patients = await db.sequelize.models.patients.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: age,
      gender: req.body.gender,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      address: req.body.address,
      dateOfBirth: req.body.dateOfBirth,
    });
    res.status(200).json({
      success: true,
      patients,
      message: "patient record created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      req: req.json(),
      error,
      message: "failed",
    });
  }
};

exports.getPatientRecords = async (req, res) => {
  try {
    const patients = await db.sequelize.models.patients.findAll();
    res.status(200).json({
      success: true,
      patients,
      message: "patient record fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};
