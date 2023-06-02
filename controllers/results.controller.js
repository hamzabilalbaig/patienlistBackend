const db = require("../models");

exports.createResults = async (req, res) => {
  try {
    const results = await db.sequelize.models.results.create({
      report: req.body.report,
      //   image: req.body.image,
      //   imagetype: req.body.imagetype,
      //   imagesize: req.body.imagesize,
      //   imageURL: req.body.imageURL,
      patientId: req.body.patientId,
    });
    res.status(200).json({
      success: true,
      results,
      message: "results record created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};

exports.getResults = async (req, res) => {
  try {
    const results = await db.sequelize.models.results.findAll({
      where: { patientId: req.params.id },
    });
    res.status(200).json({
      success: true,
      results,
      message: "results record fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};
