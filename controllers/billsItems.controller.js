const db = require("../models");

exports.createBillsItems = async (req, res) => {
  try {
    const billsItems = await db.sequelize.models.billsItems.create({
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
      total: req.body.total,
      invoiceId: req.body.invoiceId,
      patientId: req.body.patientId,
    });
    res.status(200).json({
      success: true,
      billsItems,
      message: "billsItems record created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};

exports.getBillsItems = async (req, res) => {
  try {
    const billsItems = await db.sequelize.models.billsItems.findAll({
      where: { invoiceId: req.params.invoiceId },
    });
    res.status(200).json({
      success: true,
      billsItems,
      message: "billsItems record fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};
