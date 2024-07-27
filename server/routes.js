const express = require("express");
const {
  createNote,
  getAllNotes,
  deleteNoteById,
} = require("./Controllers/notes");

const router = express.Router();

router.post("/createNote", createNote);
router.get("/getAllNotes", getAllNotes);
router.delete("/deleteNote/:id", deleteNoteById);

module.exports = router;
