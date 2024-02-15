// userController.js

// Example user data for demonstration purposes
const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

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
const registerUser = (req, res) => {
  // In a real application, you would validate the request body before creating the user
  const { name, email, password, pic } = req.body;
  const newUser = { name, email, password, pic };

  users.push(newUser);

  // Response object with only name and email properties
  const responseUser = { name, email };

  res.status(201).json(responseUser);
};

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
