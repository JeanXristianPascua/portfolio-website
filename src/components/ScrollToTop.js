// src/components/ScrollToTop.js
import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useTheme } from "@mui/material/styles";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return visible ? (
    <IconButton
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: theme.palette.mode === "dark" ? "#ffffff" : "#000000",
        color: theme.palette.mode === "dark" ? "#000000" : "#ffffff",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
        padding: "10px",
        borderRadius: "50%",
      }}
      aria-label="Scroll to top" // Added aria-label for accessibility
    >
      <ArrowUpwardIcon />
    </IconButton>
  ) : null;
};

export default ScrollToTop;
