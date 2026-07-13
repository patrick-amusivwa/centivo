"use client";
import * as React from "react";
import { ThemeProvider, createTheme, alpha } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Google Sans", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    primary: {
      main: "#1a73e8", // Google Blue
    },
    secondary: {
      main: "#ea4335", // Google Red
    },
    success: {
      main: "#34a853", // Google Green
    },
    warning: {
      main: "#fbbc04", // Google Yellow
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#202124",
      secondary: "#5f6368",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: "999px",
          padding: "10px 24px",
          backdropFilter: "blur(30px) saturate(180%)",
          WebkitBackdropFilter: "blur(30px) saturate(180%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.68), 0 12px 30px rgba(15,23,42,0.14)",
          border: "1px solid rgba(255,255,255,0.28)",
          transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease, background 180ms ease",
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.76), 0 16px 40px rgba(15,23,42,0.18)",
          },
        },
        contained: {
          color: "#fff",
          background: "linear-gradient(180deg, rgba(111,183,255,0.55), rgba(0,113,227,0.6)), rgba(0,113,227,0.38)",
          borderColor: "rgba(191,226,255,0.38)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.34), 0 18px 38px rgba(0,113,227,0.26)",
          "&:hover": {
            background: "linear-gradient(180deg, rgba(126,191,255,0.62), rgba(0,119,237,0.72)), rgba(0,119,237,0.46)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.34), 0 20px 44px rgba(0,113,227,0.3)",
          },
        },
        outlined: {
          color: "#0a1b35",
          background: "linear-gradient(180deg, rgba(255,255,255,0.62), rgba(255,255,255,0.22)), rgba(255,255,255,0.18)",
          borderColor: "rgba(255,255,255,0.42)",
          "&:hover": {
            borderColor: "rgba(255,255,255,0.56)",
            background: "linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0.28)), rgba(255,255,255,0.24)",
          },
        },
        text: {
          color: "#0a1b35",
          "&:hover": {
            backgroundColor: alpha("#ffffff", 0.24),
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)",
          borderRadius: "16px",
        },
      },
    },
  },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
