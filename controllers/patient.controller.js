const db = require("../models");

exports.createPatientRecord = async (req, res) => {
  try {
    console.log(req);
    const patients = await db.sequelize.models.patients.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      gender: req.body.gender,
    });
    res.status(200).json({
      patients,
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
