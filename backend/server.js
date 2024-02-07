const express = require("express");
const notes = require("./data/notes");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server is running ${PORT} port`));

app.get("/", (req, res) => {
  res.json("API is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((c) => c._id === req.params.id);

  res.send(note);
});
