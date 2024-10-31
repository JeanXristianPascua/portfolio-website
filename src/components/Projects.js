// src/components/Projects.js
import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Modal,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  const projectList = [
    {
      title: "Green Flag Lawn Care App",
      description:
        "A GPS navigation and route optimization app for lawn technicians to efficiently manage service routes and client schedules.",
      details: (
        <>
          <Typography variant="body1" gutterBottom>
            Check out this demo video of the Green Flag Lawn Care App,
            showcasing its GPS navigation and route optimization features:
          </Typography>
          <Box sx={{ marginTop: 2 }}>
            <video width="100%" controls>
              <source src="capstone-project.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </>
      ),
    },
    {
      title: "Task Management App",
      description:
        "An application that allows users to manage tasks with user authentication, secure backend features, and a user-friendly interface for organizing and tracking productivity. (Currently under development)",
      details: (
        <>
          <Typography variant="body1" gutterBottom>
            This project is still in progress, and updates are being made to
            enhance its functionality and user experience. Stay tuned for more
            information as development continues.
          </Typography>
        </>
      ),
    },
  ];

  return (
    <Container
      id="projects"
      sx={{
        textAlign: "center",
        padding: "3rem 0",
        backgroundColor: "background.default",
      }}
      aria-labelledby="projects-heading"
    >
      <Typography
        variant="h4"
        gutterBottom
        id="projects-heading"
        role="heading"
        aria-level="2" // Specifies heading level for accessibility
      >
        Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projectList.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                variant="outlined"
                sx={{
                  backgroundColor: "background.paper",
                  color: "text.primary",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                  },
                  borderRadius: "8px",
                }}
                aria-labelledby={`project-title-${index}`}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    id={`project-title-${index}`}
                    aria-label={`Project title: ${project.title}`}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    aria-label={`Project description: ${project.description}`}
                  >
                    {project.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "primary.main",
                      color: "background.default",
                      fontWeight: "bold",
                      mt: 2,
                      "&:hover": {
                        backgroundColor: "secondary.main",
                      },
                      borderRadius: "6px",
                      padding: "0.5rem 1rem",
                    }}
                    aria-label={`Learn more about ${project.title}`}
                    onClick={() => handleOpen(project)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%", // Increase width to cover more of the screen
            maxWidth: "900px", // Maximum width for larger screens
            bgcolor: "background.paper",
            borderRadius: 1,
            boxShadow: 24,
            p: 4,
          }}
        >
          {selectedProject && (
            <>
              <Typography variant="h6" gutterBottom>
                {selectedProject.title}
              </Typography>
              {selectedProject.details}
              <Button onClick={handleClose} sx={{ mt: 2 }}>
                Close
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default Projects;
