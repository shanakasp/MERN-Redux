const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

// Get all users
const getAllUsers = (req, res) => {
  res.json(users);
};

// Get user by ID
const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};

// Create a new user
const registerUser = asyncHandler(async (req, res) => {
  // In a real application, you would validate the request body before creating the user
  const { name, email, password, pic } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }
  {
    const user = await User.create({ name, email, password, pic });
    res.status(200).json(user);
  }

  const newUser = { name, email, password, pic };

  users.push(newUser);

  // Response object with only name and email properties
  const responseUser = { _id, name, email };

  res.status(201).json(responseUser);
});

// Update user by ID
const updateUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const { name, email } = req.body;
  users[userIndex] = { ...users[userIndex], name, email };

  res.json(users[userIndex]);
};

// Delete user by ID
const deleteUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = users.splice(userIndex, 1);
  res.json(deletedUser[0]);
};

module.exports = {
  getAllUsers,
  getUserById,
  registerUser,
  updateUserById,
  deleteUserById,
};
