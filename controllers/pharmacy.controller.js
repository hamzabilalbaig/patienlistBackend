const db = require("../models");

exports.createItem = async (req, res) => {
  try {
    const item = await db.sequelize.models.Pharmacy.create({
      itemName: req.body.itemName,
      itemType: req.body.itemType,
      itemCategory: req.body.itemCategory,
      price: req.body.price,
      quantity: req.body.quantity,
      stock: req.body.stock,
      grade: req.body.grade,
    });
    res.status(201).json({
      success: true,
      item,
      message: "item created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};

exports.getAllItems = async (req, res) => {
  try {
    const items = await db.sequelize.models.Pharmacy.findAll();
    res.status(200).json({
      success: true,
      items,
      message: "items fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};

exports.getItemById = async (req, res) => {
  try {
    const items = await db.sequelize.models.Pharmacy.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json({
      success: true,
      items,
      message: "item record fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};

exports.editItemById = async (req, res) => {
  try {
    const items = await db.sequelize.models.Pharmacy.update(
      {
        itemName: req.body.itemName,
        itemType: req.body.itemType,
        itemCategory: req.body.itemCategory,
        price: req.body.price,
        quantity: req.body.quantity,
        stock: req.body.stock,
        grade: req.body.grade,
      },
      { where: { id: req.params.id } }
    );
    res.status(200).json({
      success: true,
      items,
      message: "item record fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};

exports.deleteItemById = async (req, res) => {
  try {
    const items = await db.sequelize.models.Pharmacy.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({
      success: true,
      items,
      message: "item record fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};
