import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../../ErrorMessage";
import Loading from "../../Loading";
import MainScreen from "../../MainScreen";
import Success from "../../Success";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [pic, setPic] = useState(null);
  const [picMessage, setPicMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    name: null,
    email: null,
    password: null,
    confirmPassword: null,
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setError((prevError) => ({ ...prevError, [name]: null }));

    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "confirmPassword") setConfirmPassword(value);
  };

  const handlePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPic(file);
      setPicMessage("Image selected");
    } else {
      setPic(null);
      setPicMessage("No image selected");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("Saving...");
    setError({
      name: !name,
      email: !email,
      password: !password,
      confirmPassword: !confirmPassword,
    });

    if (!name || !email || !password || !confirmPassword) {
      return;
    }

    if (password !== confirmPassword) {
      setError((prevError) => ({
        ...prevError,
        confirmPassword: true,
      }));
      setMessage("Passwords do not match.");
      return;
    }
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", pic);
      formData.append("upload_preset", "MernRedux");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dbiqgfnkt/image/upload",
        formData
      );

      // Extracting the URL of the uploaded image from the response
      const imageUrl = response.data.secure_url;

      const userResponse = await axios.post("http://localhost:5000/api/users", {
        name,
        email,
        password,
        pic: imageUrl, // Save the image URL instead of the asset ID
      });

      console.log(name, email, password, imageUrl);
      setSuccessMessage("User registered successfully!");
    } catch (error) {
      console.error("Registration error:", error);
      setError({
        name: null,
        email: null,
        password: null,
        confirmPassword: null,
      });
      setError((prevError) => ({
        ...prevError,
        password: error.response.data.message,
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainScreen title="REGISTER">
      {loading && <Loading />}
      {(error.name || error.email || error.password || error.confirmPassword) &&
        !error.password && (
          <ErrorMessage message="Please fill out all fields correctly." />
        )}
      {error.password && <ErrorMessage message="Passwords do not match." />}
      {successMessage && <Success message={successMessage} />}

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <form
          onSubmit={handleSubmit}
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <TextField
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            margin="normal"
            fullWidth
            value={name}
            onChange={handleChange}
            error={error.name}
          />
          <TextField
            id="email"
            name="email"
            label="Email Address"
            type="email"
            variant="outlined"
            margin="normal"
            fullWidth
            value={email}
            onChange={handleChange}
            error={error.email}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            value={password}
            onChange={handleChange}
            error={error.password}
          />
          <TextField
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            value={confirmPassword}
            onChange={handleChange}
            error={error.confirmPassword}
          />
          <div style={{ marginTop: "15px" }}>
            <Button component="label" variant="contained">
              Upload profile picture
              <input
                type="file"
                style={{ display: "none" }}
                onChange={handlePicChange}
              />
            </Button>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{ marginTop: "8px" }}
            >
              {picMessage}
            </Typography>
          </div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "1rem" }}
            disabled={loading}
          >
            Register
          </Button>

          <Typography variant="body1" style={{ marginTop: "1rem" }}>
            Have an Account?{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ marginTop: "8px" }}
          >
            {message}
          </Typography>
        </form>
      </Box>
    </MainScreen>
  );
};

export default RegisterScreen;
