const express = require("express");
const {
  createNote,
  getAllNotes,
  deleteNoteById,
  updateNoteById,
  getNoteById,
} = require("./Controllers/notes");

const { addTags, deleteTags, query } = require("./Controllers/tags");

const router = express.Router();

router.post("/notes", createNote);
router.get("/notes", getAllNotes);
router.delete("/notes/:id", deleteNoteById);
router.put("/notes/:id", updateNoteById);
router.get("/notes/:id", getNoteById);
router.put("/notes/:id/tags", addTags);
router.delete("/notes/:id/tags", deleteTags);
router.get("/query", query);

module.exports = router;
