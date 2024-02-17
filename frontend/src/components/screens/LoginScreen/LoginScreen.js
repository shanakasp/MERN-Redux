import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState(""); // State to store email
  const [password, setPassword] = useState(""); // State to store password

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log("Email:", email, "Password:", password);

    // Perform login logic here
  };

  return (
    <Box
      display="flex"
      marginTop="30px"
      justifyContent="center"
      alignItems="flex-start" // Align items to the top
      minHeight="calc(65vh )" // Adjusted gin top added to center vertically
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
          >
            Login
          </Button>
        </form>
        <Box mt={2} textAlign="center">
          {/* Added a container for better spacing */}
          <div className="newtothesite" style={{ textAlign: "left" }}>
            <Typography variant="h6" gutterBottom>
              New to the site?
            </Typography>
          </div>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/register"
            sx={{ mt: 1, boxShadow: "1px 1px 2px rgba(0,0,0,0.2)" }} // Added box shadow
          >
            Click here to register
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginScreen;
