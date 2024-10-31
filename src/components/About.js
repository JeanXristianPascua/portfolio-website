// src/components/About.js
import React from "react";
import { Container, Typography, Avatar, Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container
        id="about"
        sx={{
          textAlign: "center",
          padding: "3rem 0",
          backgroundColor:
            theme.palette.mode === "dark" ? "#2c2c2c" : "#f0f0f0",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
          color: theme.palette.text.primary,
        }}
        aria-labelledby="about-heading" // Added aria-labelledby for accessibility
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold" }}
          id="about-heading" // Added ID for aria reference
          role="heading"
          aria-level="2" // Specifies heading level
        >
          About Me
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar
            src="portfolio-thumbnail.png" // Update this path with your image source
            alt="Jean Xristian Pascua's profile picture" // Added alt text for accessibility
            sx={{
              width: { xs: 100, md: 150 },
              height: { xs: 100, md: 150 },
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
              border: `3px solid ${theme.palette.divider}`,
            }}
          />
          <Typography
            variant="body1"
            sx={{
              maxWidth: "600px",
              fontSize: { xs: "0.9rem", md: "1.1rem" },
              lineHeight: 1.6,
              color: theme.palette.text.secondary,
            }}
          >
            Hello! I'm Jean Xristian Pascua, a passionate software developer
            with a diploma in Software Development from SAIT. I specialize in
            web and mobile application development and am enthusiastic about
            cybersecurity.
          </Typography>
        </Box>
      </Container>
    </motion.div>
  );
};

export default About;
