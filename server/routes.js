const express = require("express");
const {
  createNote,
  getAllNotes,
  deleteNoteById,
  updateNoteById,
  getNoteById,
} = require("./Controllers/notes");

const { addTags, deleteTags } = require("./Controllers/tags");

const router = express.Router();

router.post("/createNote", createNote);
router.get("/getAllNotes", getAllNotes);
router.delete("/deleteNote/:id", deleteNoteById);
router.put("/updateNote/:id", updateNoteById);
router.get("/getNoteById/:id", getNoteById);
router.put("/addTag/:id", addTags);
router.delete("/deleteTag/:id", deleteTags);

module.exports = router;
