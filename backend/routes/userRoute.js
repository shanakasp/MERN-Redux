const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Define routes for users
router.get("/", (req, res) => {
  res.send("Get all users");
});

router.get("/:id", (req, res) => {
  res.send(`Get user with ID ${req.params.id}`);
});

router.post("/", userController.registerUser);
router.post("/login", userController.authUser);

router.put("/:id", (req, res) => {
  // Logic for updating a user
});

router.delete("/:id", (req, res) => {
  // Logic for deleting a user
});

module.exports = router;
