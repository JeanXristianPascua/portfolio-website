// src/components/Header.js
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-scroll";
import "./Header.css"; // Ensure this contains any additional styles you need

const Header = () => (
  <AppBar
    position="static"
    color="primary"
    elevation={4}
    sx={{ padding: "0.5rem" }}
  >
    <Toolbar>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
        role="heading"
        aria-level="1" // Added ARIA level for the main heading
      >
        Jean Xristian Pascua
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          color="inherit"
          component={Link}
          to="about"
          smooth
          duration={500}
          aria-label="Navigate to About section" // Added aria-label
        >
          About
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="skills"
          smooth
          duration={500}
          aria-label="Navigate to Skills section" // Added aria-label
        >
          Skills
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="projects"
          smooth
          duration={500}
          aria-label="Navigate to Projects section" // Added aria-label
        >
          Projects
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="contact"
          smooth
          duration={500}
          aria-label="Navigate to Contact section" // Added aria-label
        >
          Contact
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
