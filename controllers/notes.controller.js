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
      title: req.body?.title,
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
    const signer = await db.sequelize.models.Notes.findOne({
      where: { id: req.params.id },
    });
    console.log(signer);
    if (signer?.note.endsWith("signed. ")) {
      res.status(200).json({
        success: false,

        message: "Note not signed successfully",
      });
    } else {
      const notes = await db.sequelize.models.Notes.update(
        { signed: true, signedBy: 1, note: signer?.note + "signed. " },
        { where: { id: req.params.id } }
      );
      res.status(200).json({
        success: true,
        notes,
        message: "Note signed successfully",
      });
    }
  } catch (error) {
    res.status(400).json({
      error,
      message: "failed",
    });
  }
};

exports.updateNote = async (req, res) => {
  try {
    const findnote = await db.sequelize.models.Notes.findOne({
      where: { id: req.params.id },
    });
    let note = findnote.note;
    const text = note;
    const separator = "signed.";
    const lastIndex = text.lastIndexOf(separator);

    let firstPart = "";
    let secondPart = "";
    if (lastIndex !== -1) {
      firstPart = text.substring(0, lastIndex + separator.length);
      secondPart = text.substring(lastIndex + separator.length).trim();
    }

    const notes = await db.sequelize.models.Notes.update(
      {
        note: firstPart + req.body?.note,
        type: req.body?.type,
        title: req.body?.title ?? findnote?.title,
      },
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
