const notes = require("./Data/data");

// Function to add tags to a note
const addTags = (req, res) => {
  const { tags } = req.body;
  const note = notes.find((note) => note.id === req.params.id);
  if (note) {
    note.tags = Array.from(new Set([...note.tags, ...tags]));
    res.json(note);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
};

// Function to delete a Tag from a note
const deleteTags = (req, res) => {
  const { tags } = req.body;
  const note = notes.find((note) => note.id === req.params.id);
  if (note) {
    note.tags = note.tags.filter((tag) => !tags.includes(tag));
    res.json({ note });
  } else {
    res.status(404).json({ message: "Note not found" });
  }
};

//Function for complex queries based on tags for a note
const query = (req, res) => {
  try {
    const { query } = req.body;

    const result = notes.filter((note) => {
      const andTags = query.and || [];
      const orTags = query.or || [];
      const notTags = query.not || [];

      //AND Condition
      const matchesAnd = andTags.every((tag) => note.tags.includes(tag));

      //OR Condition
      const matchesOr =
        orTags.length === 0 || orTags.some((tag) => note.tags.includes(tag));

      //NOT Condition
      const matchesNot = notTags.every((tag) => !note.tags.includes(tag));

      return matchesAnd && matchesOr && matchesNot;
    });
    res.json(result);
  } catch (Error) {
    console.log(Error);
  }
};

module.exports = { addTags, deleteTags, query };
