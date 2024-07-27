const express = require("express");
const {
  createNote,
  getAllNotes,
  deleteNoteById,
  updateNoteById,
  getNoteById,
} = require("./Controllers/notes");

const router = express.Router();

router.post("/createNote", createNote);
router.get("/getAllNotes", getAllNotes);
router.delete("/deleteNote/:id", deleteNoteById);
router.put("/updateNote/:id", updateNoteById);
router.get("/getNoteById/:id", getNoteById);

module.exports = router;
