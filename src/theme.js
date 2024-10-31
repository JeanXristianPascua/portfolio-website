// src/theme.js
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#808080",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#000000",
      secondary: "#404040",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h4: {
      fontWeight: 700,
      color: "#000000",
    },
    body1: {
      color: "#404040",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "2px solid #808080", // Updated to gray
            outlineOffset: "2px",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "2px solid #808080", // Updated to gray
            outlineOffset: "2px",
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#b0b0b0",
    },
    background: {
      default: "#000000",
      paper: "#1a1a1a",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h4: {
      fontWeight: 700,
      color: "#ffffff",
    },
    body1: {
      color: "#b0b0b0",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "2px solid #808080", // Updated to gray
            outlineOffset: "2px",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "2px solid #808080", // Updated to gray
            outlineOffset: "2px",
          },
        },
      },
    },
  },
});
