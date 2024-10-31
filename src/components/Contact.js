// src/components/Contact.js
import React, { useRef, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Stack,
  useTheme,
  Alert,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import emailjs from "emailjs-com";

const Contact = () => {
  const theme = useTheme();
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState(""); // State for feedback messages
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Email format validation
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate form fields
  const validateForm = () => {
    const errors = {};
    if (!formData.user_name) errors.user_name = "Name is required";
    if (!formData.user_email) {
      errors.user_email = "Email is required";
    } else if (!isValidEmail(formData.user_email)) {
      errors.user_email = "Invalid email format";
    }
    if (!formData.message) errors.message = "Message is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          "service_xn82szq", // Replace with your EmailJS service ID
          "template_xs8wn9c", // Replace with your actual EmailJS template ID
          form.current,
          "UKlFKF5X1pn_ad8yy" // Replace with your EmailJS public key
        )
        .then(
          (result) => {
            console.log("Message sent successfully:", result.text);
            setMessageStatus("success");
            e.target.reset(); // Reset form fields after successful submission
            setFormData({ user_name: "", user_email: "", message: "" }); // Clear formData
            setErrors({}); // Clear errors
          },
          (error) => {
            console.error("Error sending message:", error.text);
            setMessageStatus("error");
          }
        );
    } else {
      setMessageStatus("error"); // Show error if validation fails
    }
  };

  return (
    <Container
      id="contact"
      sx={{
        textAlign: "center",
        padding: "3rem 0",
        backgroundColor: theme.palette.mode === "dark" ? "#2c2c2c" : "#f0f0f0",
        borderRadius: "8px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
        color: theme.palette.text.primary,
      }}
      aria-labelledby="contact-heading"
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold" }}
        id="contact-heading"
        role="heading"
        aria-level="2" // Specifies heading level for screen readers
      >
        Contact Me
      </Typography>
      {messageStatus === "success" && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Message sent successfully!
        </Alert>
      )}
      {messageStatus === "error" && (
        <Alert severity="error" sx={{ mb: 2 }}>
          There was an error sending the message. Please check the form fields
          and try again.
        </Alert>
      )}
      <Stack
        component="form"
        ref={form}
        onSubmit={sendEmail}
        sx={{
          width: { xs: "100%", sm: "60%", md: "40%" },
          margin: "0 auto",
          backgroundColor: theme.palette.background.paper,
          padding: "1.5rem",
          borderRadius: "8px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
        }}
        spacing={2}
      >
        <TextField
          name="user_name"
          label="Name"
          variant="outlined"
          fullWidth
          value={formData.user_name}
          onChange={handleChange}
          error={!!errors.user_name}
          helperText={errors.user_name}
          InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
          InputProps={{
            style: {
              color: theme.palette.text.primary,
              borderColor: theme.palette.divider,
            },
          }}
          aria-required="true" // Specifies required field
        />
        <TextField
          name="user_email"
          label="Email"
          variant="outlined"
          fullWidth
          value={formData.user_email}
          onChange={handleChange}
          error={!!errors.user_email}
          helperText={errors.user_email}
          InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
          InputProps={{
            style: {
              color: theme.palette.text.primary,
              borderColor: theme.palette.divider,
            },
          }}
          aria-required="true" // Specifies required field
        />
        <TextField
          name="message"
          label="Your message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
          InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
          InputProps={{
            style: {
              color: theme.palette.text.primary,
              borderColor: theme.palette.divider,
            },
          }}
          aria-required="true" // Specifies required field
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            fontWeight: "bold",
            borderRadius: "4px",
            "&:hover": {
              backgroundColor: theme.palette.divider,
            },
          }}
          aria-label="Send message" // Added aria-label for accessibility
        >
          Send
        </Button>
      </Stack>
      <Box sx={{ marginTop: "1.5rem", color: theme.palette.text.secondary }}>
        <a
          href="https://www.linkedin.com/in/jeanxristianpascua/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: theme.palette.text.secondary, marginRight: "10px" }}
          aria-label="LinkedIn profile"
        >
          <LinkedInIcon fontSize="large" />
        </a>
        <a
          href="https://github.com/JeanXristianPascua"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: theme.palette.text.secondary }}
          aria-label="GitHub profile"
        >
          <GitHubIcon fontSize="large" />
        </a>
      </Box>
    </Container>
  );
};

export default Contact;
