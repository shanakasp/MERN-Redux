import { Button, Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Grid container>
          <div className="intro-name">
            <div>
              <h1>Welcome to Note Sp</h1>
              <p>Place to save your all notes.</p>
            </div>
            <div className="buttonContainer">
              <Link to="/login">
                {" "}
                <Button
                  variant="contained"
                  color="primary"
                  className="button"
                  style={{ marginRight: "5px" }}
                >
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  variant="contained"
                  color="secondary"
                  className="button"
                >
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default LandingPage;
