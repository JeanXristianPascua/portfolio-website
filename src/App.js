// src/App.js
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop"; // Scroll-to-top component
import { lightTheme, darkTheme } from "./theme";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedTheme);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Header />
      <main id="main-content" role="main">
        {" "}
        {/* Added ARIA role */}
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <ScrollToTop /> {/* Included ScrollToTop component */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px", // Moved to bottom left
          zIndex: 1000,
        }}
      >
        <IconButton
          aria-label="Toggle dark mode" // Added aria-label
          onClick={toggleDarkMode}
          color="inherit"
          sx={{
            backgroundColor: darkMode ? "#ffffff" : "#000000",
            color: darkMode ? "#000000" : "#ffffff",
            "&:hover": {
              backgroundColor: darkMode ? "#b0b0b0" : "#404040",
            },
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
            padding: "10px",
            borderRadius: "50%",
          }}
        >
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
