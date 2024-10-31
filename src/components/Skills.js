// src/components/Skills.js
import React from "react";
import { Container, Typography, Grid, Chip, Stack } from "@mui/material";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";

const Skills = () => (
  <Container
    id="skills"
    sx={{ textAlign: "center", padding: { xs: "2rem 1rem", md: "3rem 0" } }}
    aria-labelledby="skills-heading" // Added aria-labelledby for accessibility
  >
    <Typography
      variant="h4"
      gutterBottom
      id="skills-heading"
      role="heading"
      aria-level="2" // Specifies heading level for screen readers
    >
      Skills
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {/* Frontend Skills */}
      <Grid item xs={12} sm={6}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h6"
            gutterBottom
            role="heading"
            aria-level="3" // Specifies heading level for frontend skills
          >
            Frontend
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            sx={{ marginTop: 2, flexWrap: "wrap" }}
            aria-label="List of frontend skills" // Added aria-label for screen readers
          >
            {["HTML", "CSS", "JavaScript", "React"].map((skill) => (
              <Chip
                key={skill}
                label={skill}
                icon={<CodeIcon />}
                variant="outlined"
                aria-label={`Skill: ${skill}`} // Added aria-label for each skill chip
              />
            ))}
          </Stack>
        </motion.div>
      </Grid>

      {/* Backend Skills */}
      <Grid item xs={12} sm={6}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h6"
            gutterBottom
            role="heading"
            aria-level="3" // Specifies heading level for backend skills
          >
            Backend
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            sx={{ marginTop: 2, flexWrap: "wrap" }}
            aria-label="List of backend skills" // Added aria-label for screen readers
          >
            {["Python", "C#", "Java", "MySQL"].map((skill) => (
              <Chip
                key={skill}
                label={skill}
                icon={<StorageIcon />}
                variant="outlined"
                aria-label={`Skill: ${skill}`} // Added aria-label for each skill chip
              />
            ))}
          </Stack>
        </motion.div>
      </Grid>
    </Grid>
  </Container>
);

export default Skills;
