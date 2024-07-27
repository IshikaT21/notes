const { v4: uuidv4 } = require("uuid");

const notes = require("./Data/data");

const createNote = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const newNote = {
      id: uuidv4(),
      title,
      content,
      tags: tags || [],
    };
    notes.push(newNote);
    res.status(201).json(newNote);
  } catch (error) {
    console.log(error);
  }
};

const getAllNotes = (req, res) => {
  res.status(200).json({ notes });
};

const deleteNoteById = (req, res) => {
  try {
    const noteId = req.params.id;
    const noteIndex = notes.findIndex((note) => note.id === noteId);
    if (noteIndex !== -1) {
      notes.splice(noteIndex, 1);
      res.status(200).json({
        message: `Successfully removed note with id: ${noteId}`,
      });
    } else {
      res.status(404).json({ message: "Note not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const updateNoteById = (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const note = notes.find((note) => note.id === req.params.id);
    if (note) {
      note.title = title;
      note.content = content;
      note.tags = tags;
      res.json(note);
    } else {
      res.status(404).json({ message: "Note not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const getNoteById = (req, res) => {
  try {
    const note = notes.find((note) => note.id === req.params.id);
    if (note) {
      res.json({ note });
    } else {
      res.status(404).json({ message: "Note not found" });
    }
  } catch (error) {}
};

module.exports = {
  createNote,
  getAllNotes,
  deleteNoteById,
  updateNoteById,
  getNoteById,
};
