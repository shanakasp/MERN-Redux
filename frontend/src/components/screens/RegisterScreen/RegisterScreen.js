import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";
import MainScreen from "../../MainScreen";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const RegisterScreen = () => {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <MainScreen title="REGISTER">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <form style={{ width: "100%", maxWidth: "400px" }}>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            margin="normal"
            fullWidth
            sx={{ width: "100%" }} // Set width to 100%
          />
          <TextField
            id="email"
            label="Email Address"
            type="email"
            variant="outlined"
            margin="normal"
            fullWidth
            sx={{ width: "100%" }} // Set width to 100%
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            sx={{ width: "100%" }} // Set width to 100%
          />
          <TextField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            sx={{ width: "100%" }} // Set width to 100%
          />
          <div style={{ marginTop: "15px" }}>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              type="image/png"
            >
              Upload profile picture
              <input type="file" style={{ display: "none" }} />
            </Button>
          </div>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "1rem" }}
          >
            Register
          </Button>
        </form>
        <Typography variant="body1" style={{ marginTop: "1rem" }}>
          Have an Account?{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </Typography>
      </Box>
    </MainScreen>
  );
};

export default RegisterScreen;
