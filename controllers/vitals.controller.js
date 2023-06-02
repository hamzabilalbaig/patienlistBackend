const db = require("../models");

exports.createVitals = async (req, res) => {
  try {
    const vitals = await db.sequelize.models.vitals.create({
      t: req.body.t,
      bp: req.body.bp,
      hr: req.body.hr,
      pr: req.body.pr,
      spotwo: req.body.spotwo,
      patientId: req.body.patientId,
    });
    res.status(200).json({
      success: true,
      vitals,
      message: "vitals record created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};

exports.getVitals = async (req, res) => {
  try {
    const vitals = await db.sequelize.models.vitals.findAll({
      where: { patientId: req.params.id },
    });
    res.status(200).json({
      success: true,
      vitals,
      message: "vitals record fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};
