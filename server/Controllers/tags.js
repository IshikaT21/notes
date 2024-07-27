const notes = require("./Data/data");

const addTags = (req, res) => {
  const { tags } = req.body;
  const note = notes.find((note) => note.id === req.params.id);
  console.log("note: ", note);
  if (note) {
    note.tags = Array.from(new Set([...note.tags, ...tags]));
    res.json(note);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
};

const deleteTags = (req, res) => {
  const { tags } = req.body;
  const note = notes.find((note) => note.id === req.params.id);
  if (note) {
    console.log("note.tags1: ", note.tags);
    note.tags = note.tags.filter((tag) => !tags.includes(tag));
    console.log("note.tags2: ", note.tags);
    res.json({ note });
  } else {
    res.status(404).json({ message: "Note not found" });
  }
};

module.exports = { addTags, deleteTags };
