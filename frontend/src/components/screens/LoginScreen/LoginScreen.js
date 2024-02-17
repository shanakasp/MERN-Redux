import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState(""); // State to store email
  const [password, setPassword] = useState(""); // State to store password
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors
  const [userData, setUserData] = useState(null); // State to store user data

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    setLoading(true); // Set loading to true
    setError(null); // Clear any previous errors

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        { email, password }
      );

      setUserData(response.data); // Set user data in state

      console.log("Login successful:", response.data);
    } catch (error) {
      setError(error.message); // Set error message in state
      console.error("Login error:", error.message);
    } finally {
      setLoading(false); // Set loading to false after request completes
    }
  };

  return (
    <Box
      display="flex"
      marginTop="30px"
      justifyContent="center"
      alignItems="flex-start"
      minHeight="calc(65vh )"
    >
      <Box width="300px" textAlign="center">
        <Typography variant="h4" gutterBottom>
          Login Screen
        </Typography>
        <form>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleLogin}
            disabled={loading} // Disable button when loading
          >
            {loading ? "Loading..." : "Login"}{" "}
            {/* Change button text based on loading state */}
          </Button>
        </form>
        {error && <Typography color="error">{error}</Typography>}{" "}
        {/* Display error message if present */}
        {userData && ( // Display user data if available
          <Box mt={2}>
            <Typography variant="h6">User Data:</Typography>
            <pre>{JSON.stringify(userData, null, 2)}</pre>
          </Box>
        )}
        <Box mt={2} textAlign="center">
          <Typography variant="h6" gutterBottom>
            New to the site?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/register"
            sx={{ mt: 1, boxShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
          >
            Click here to register
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginScreen;
