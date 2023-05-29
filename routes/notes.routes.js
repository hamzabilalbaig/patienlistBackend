var express = require("express");
const {
  getNotesById,
  createNote,
  signNote,
  updateNote,
} = require("../controllers/notes.controller");
var router = express.Router();

router.post("/createNote", createNote);
router.get("/getNotesById/:id", getNotesById);
router.put("/signNote/:id", signNote);
router.put("/updateNote/:id", updateNote);

module.exports = router;
