const db = require("../models");

exports.createOrder = async (req, res) => {
  try {
    const order = await db.sequelize.models.orders.create({
      patientId: req.body.patientId,
      itemId: req.body.itemId,
      status: "pending",
      quantity: req.body.quantity,
    });
    res.status(201).json({
      success: true,
      order,
      message: "order created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await db.sequelize.models.orders.findAll();
    res.status(200).json({
      success: true,
      orders,
      message: "orders fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};

exports.getOrdersByPatientId = async (req, res) => {
  try {
    const orders = await db.sequelize.models.orders.findAll({
      where: { patientId: req.params.patientId },
      include: [
        {
          model: db.sequelize.models.patients,
          as: "patient",
        },
        {
          model: db.sequelize.models.Pharmacy,
          as: "Pharmacy",
        },
      ],
    });
    res.status(200).json({
      success: true,
      orders,
      message: "orders fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};

exports.deleteOrderById = async (req, res) => {
  try {
    const order = await db.sequelize.models.orders.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({
      success: true,
      order,
      message: "order deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};
