import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function LookingFor() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        mb: 3,
      }}
    >
      {/* Background Image Container */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: {
            xs: "50%", // 30% of the box height on small screens
            sm: "40%", // 40% of the box height on medium screens
            md: "70%", // 50% of the box height on larger screens
          },
          backgroundImage: 'url(/images/LookingFor.svg)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      ></Box>

      {/* Content Overlay */}
      <Container
        sx={{
          position: "relative",
          zIndex: 2, // Bring content above the background
          paddingTop: {
            xs: "20%", // Add space for the background on small screens
            sm: "15%", // Adjust for medium screens
            md: "5%", // Standard space for larger screens
          },
          color: "#fff",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginBottom: 2,
            fontSize: {
              xs: "1.5rem", // Smaller font for small screens
              sm: "2rem", // Medium font for medium screens
              md: "2.5rem", // Standard font for larger screens
            },
          }}
        >
          What are you Looking For?
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            marginBottom: 4,
            fontSize: {
              xs: "0.9rem", // Smaller font for small screens
              sm: "1rem", // Medium font for medium screens
              md: "1.2rem", // Standard font for larger screens
            },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            paddingTop: {
              xs: "50%", // Higher aspect ratio on small screens
              sm: "45%", // Adjusted for medium screens
              md: "40%", // Standard aspect ratio for larger screens
            },
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", // Box shadow
            borderRadius: 2,
            border: "5px solid #fff",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387196.07669747627!2d-74.30915211195304!3d40.69667268889187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1736422121569!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              border: 0,
            }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </Box>
      </Container>
    </Box>
  );
}
