const db = require("../models");

exports.createBills = async (req, res) => {
  try {
    const bills = await db.sequelize.models.bills.create({
      patientId: req.body.patientId,
    });
    res.status(200).json({
      success: true,
      bills,
      message: "bills record created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};

exports.getBillsById = async (req, res) => {
  try {
    const bills = await db.sequelize.models.bills.findAll({
      where: { patientId: req.params.id },
    });
    res.status(200).json({
      success: true,
      bills,
      message: "bills record created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};
