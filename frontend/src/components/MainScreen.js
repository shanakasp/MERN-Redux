import { Container, Grid } from "@mui/material";
import React from "react";
import "./MainScreen.css";
const MainScreen = ({ title, children }) => {
  return (
    <div className="mainback">
      <Container>
        <Grid>
          <div className="page">
            {title && (
              <>
                <h1 className="heading">{title}</h1>
                <hr></hr>
              </>
            )}
            {children}
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default MainScreen;
