const express = require("express");
const cors = require("cors");
const notes = require("./data/notes");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const app = express();

app.use(express.json());

// Middleware function to log requests to the terminal
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Call next middleware
});

// Use the cors middleware
app.use(cors());

connectDB(); // Connect to MongoDB

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

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

// Define routes for users
const userRoutes = require("./routes/userRoute");
app.use("/api/users", userRoutes);
