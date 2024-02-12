import { Button, Container, Grid } from "@mui/material";
import React from "react";
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
              <Button
                variant="contained"
                color="primary"
                className="button"
                style={{ marginRight: "5px" }}
              >
                Login
              </Button>
              <Button variant="contained" color="secondary" className="button">
                Register
              </Button>
            </div>
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default LandingPage;
