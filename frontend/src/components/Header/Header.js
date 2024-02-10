import Brightness4Icon from "@mui/icons-material/Brightness4";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

const Header = () => {
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
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Option 1</MenuItem>
            <MenuItem onClick={handleClose}>Option 2</MenuItem>
            <MenuItem onClick={handleClose}>Option 3</MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="toggle-dark-mode"
            onClick={toggleDarkMode}
          >
            <Brightness4Icon />
          </IconButton>
          <div>
            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
