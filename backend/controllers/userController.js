const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

// Get all users
const getAllUsers = (req, res) => {
  res.json(users);
};

// // Get user by ID
// const getUserById = (req, res) => {
//   const userId = parseInt(req.params.id);
//   const user = users.find((user) => user.id === userId);

//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   res.json(user);
// };

// Create a new user
const registerUser = asyncHandler(async (req, res) => {
  // In a real application, you would validate the request body before creating the user
  const { name, email, password, pic } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = await User.create({ name, email, password, pic });
  // Response object with only name and email properties
  const responseUser = {
    _id: user._id,
    name: user.name,
    email: user.email,
    pic: user._id,
    token: generateToken(user._id),
  };
  res.status(201).json(responseUser);
});

// Controller function to authenticate user
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = await User.findOne({ email });

  // If user doesn't exist, return error
  if (!user) {
    return res
      .status(401)
      .json({ message: "User with this email does not exist" });
  }

  // Check if the provided password matches the stored password using bcrypt
  const isPasswordValid = await bcrypt.compare(password, user.password);

  // If password is incorrect, return error
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid password" });
  }

  // Return user data and token
  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    pic: user.pic,
    token: generateToken(user._id),
  });
});

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
  // getUserById,
  registerUser,
  authUser,
  // updateUserById,
  deleteUserById,
};
