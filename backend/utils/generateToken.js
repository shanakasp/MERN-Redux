require("dotenv").config();
const jwt = require("jsonwebtoken");

// Function to generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, "buddima", {
    expiresIn: "30d", // Token expires in 30 days
  });
};

module.exports = generateToken;
