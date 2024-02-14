const express = require("express");
const cors = require("cors");
const notes = require("./data/notes");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

// Middleware function to log requests to the terminal
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Call next middleware
});

// Use the cors middleware
app.use(cors());

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
