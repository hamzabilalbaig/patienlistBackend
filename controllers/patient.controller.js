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

exports.editPatientRecord = async (req, res) => {
  try {
    console.log(req);
    const age = calculateAge(req.body.dateOfBirth);
    const patients = await db.sequelize.models.patients.update(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: age,
        gender: req.body.gender,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        address: req.body.address,
        dateOfBirth: req.body.dateOfBirth,
      },
      { where: { id: req.params.id } }
    );
    res.status(200).json({
      success: true,
      patients,
      message: "patient record updated successfully",
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

exports.getPatientById = async (req, res) => {
  try {
    const patients = await db.sequelize.models.patients.findOne({
      where: { id: req.params.id },
    });
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

exports.editallbyId = async (req, res) => {
  try {
    const patients = await db.sequelize.models.patients.update(
      {
        all: req.body.all,
      },
      { where: { id: req.params.id } }
    );
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
exports.editmedsbyId = async (req, res) => {
  try {
    const patients = await db.sequelize.models.patients.update(
      {
        meds: req.body.meds,
      },
      {
        where: { id: req.params.id },
      }
    );
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
exports.editmedhxbyId = async (req, res) => {
  try {
    const patients = await db.sequelize.models.patients.update(
      {
        medhx: req.body.medhx,
      },
      {
        where: { id: req.params.id },
      }
    );
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
exports.editsurghxbyId = async (req, res) => {
  try {
    const patients = await db.sequelize.models.patients.update(
      {
        surghx: req.body.surghx,
      },
      {
        where: { id: req.params.id },
      }
    );
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
exports.editsochxbyId = async (req, res) => {
  try {
    const patients = await db.sequelize.models.patients.update(
      {
        sochx: req.body.sochx,
      },
      {
        where: { id: req.params.id },
      }
    );
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
