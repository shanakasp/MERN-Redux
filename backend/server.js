const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware for CORS
app.use(cors());

// Middleware function to log requests to the terminal
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Define routes for users
const userRoutes = require("./routes/userRoute");
app.use("/api/users", userRoutes);

// Route for notes (example)
const notes = require("./data/notes");
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// Not found middleware
app.use(notFound);

// Error handler middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
