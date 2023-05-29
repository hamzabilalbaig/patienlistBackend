const db = require("../models");

exports.createNote = async (req, res) => {
  try {
    const notes = await db.sequelize.models.Notes.create({
      type: req.body?.type,
      note: req.body?.note,
      createdBy: 1,
      userId: req.body?.userId,
      signed: false,
      signedBy: 1,
    });
    res.status(200).json({
      success: true,
      notes,
      message: "Note created successfully",
    });
  } catch (error) {
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};

exports.getNotesById = async (req, res) => {
  try {
    const notes = await db.sequelize.models.Notes.findAll({
      where: { userId: req.params.id },
    });
    res.status(200).json({
      success: true,
      notes,
      message: "Notes fetched successfully",
    });
  } catch (error) {
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};

exports.signNote = async (req, res) => {
  try {
    const notes = await db.sequelize.models.Notes.update(
      { signed: true, signedBy: 1 },
      { where: { id: req.params.id } }
    );
    res.status(200).json({
      success: true,
      notes,
      message: "Note signed successfully",
    });
  } catch (error) {
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};

exports.updateNote = async (req, res) => {
  try {
    const notes = await db.sequelize.models.Notes.update(
      { note: req.body?.note, type: req.body?.type },
      { where: { id: req.params.id } }
    );
    res.status(200).json({
      success: true,
      notes,
      message: "Note updated successfully",
    });
  } catch (error) {
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};
