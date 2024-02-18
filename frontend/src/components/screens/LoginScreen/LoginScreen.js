import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "../../ErrorMessage";
import Loading from "../../Loading";
import Success from "../../Success";

const LoginScreen = () => {
  const [email, setEmail] = useState(""); // State to store email
  const [password, setPassword] = useState(""); // State to store password
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors
  const [successMessage, setSuccessMessage] = useState(""); // State to manage success message
  const navigate = useNavigate(); // Hook for navigation

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        { email, password }
      );

      const userData = response.data;
      localStorage.setItem("userInfo", JSON.stringify(userData));
      setSuccessMessage("Login successful!"); // Set success message
      console.log("Login successful:", userData);

      // Navigate to "/mynotes" after 2 seconds
      setTimeout(() => {
        navigate("/mynotes");
      }, 2000);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        if (error.response.status === 401) {
          setError("Invalid email or password"); // Set custom error message for 401 status
        } else {
          setError("An error occurred. Please try again later."); // Generic error message for other status codes
        }
      } else if (error.request) {
        // The request was made but no response was received
        setError("No response from server. Please try again later.");
      } else {
        // Something happened in setting up the request that triggered an error
        setError("An error occurred. Please check your internet connection.");
      }
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="logging">
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
          <div
            style={{
              display: "flex",
              justifyContent: "center", // Center items horizontally
              alignItems: "center", // Center items vertically
            }}
          >
            {/* Loading component will be centered */}
            {loading && <Loading />}
            {error && <ErrorMessage message={error} />}
            {successMessage && <Success message={successMessage} />}
          </div>
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
    </div>
  );
};

export default LoginScreen;
