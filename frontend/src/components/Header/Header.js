import Brightness4Icon from "@mui/icons-material/Brightness4";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
            ></IconButton>

            <Link to={"/"}>
              {" "}
              <Typography variant="h6" component="div">
                My App
              </Typography>
            </Link>
          </div>

          <InputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            style={{ marginLeft: "auto", marginRight: "auto" }}
          />

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <PopupState variant="popover" popupId="demo-popup-menu1">
              {(popupState) => (
                <React.Fragment>
                  <div>
                    <Link to="/mynotes">
                      <Button variant="contained" {...bindTrigger(popupState)}>
                        My note
                      </Button>
                    </Link>
                  </div>
                </React.Fragment>
              )}
            </PopupState>
            <PopupState variant="popover" popupId="demo-popup-menu2">
              {(popupState) => (
                <React.Fragment>
                  <div>
                    <Button variant="contained" {...bindTrigger(popupState)}>
                      Shanaka Prince
                    </Button>
                  </div>

                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>Profile</MenuItem>
                    <MenuItem
                      onClick={() => {
                        localStorage.removeItem("userInfo");
                        navigate("/login");
                      }}
                    >
                      Log out
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="toggle-dark-mode"
              onClick={toggleDarkMode}
            >
              <Brightness4Icon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
