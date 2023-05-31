const db = require("../models");

exports.createTemplate = async (req, res) => {
  try {
    const templates = await db.sequelize.models.templates.create({
      templateName: req.body.templateName,
      templateData: "",
    });
    res.status(200).json({
      success: true,
      templates,
      message: "template created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};

exports.addtemplateData = async (req, res) => {
  try {
    const templates = await db.sequelize.models.templates.update(
      {
        templateData: req.body.templateData,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    res.status(200).json({
      success: true,
      templates,
      message: "template data added successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};

exports.getalltemplates = async (req, res) => {
  try {
    const templates = await db.sequelize.models.templates.findAll();
    res.status(200).json({
      success: true,
      templates,
      message: "template fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};

exports.gettemplatebyid = async (req, res) => {
  try {
    const templates = await db.sequelize.models.templates.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      success: true,
      templates,
      message: "template fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};

exports.deleteTemplate = async (req, res) => {
  try {
    const template = await db.sequelize.models.templates.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({
      success: true,
      template,
      message: "Template deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
      message: "Failed to delete template",
    });
  }
};
