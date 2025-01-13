import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

export default function LookingFor() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        mb: 3,
        mt: 6,
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
          backgroundImage: "url(/images/LookingFor.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      ></Box>

      {/* Content Overlay */}
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2, // Bring content above the background
          paddingTop: {
            xs: "20%", // Add space for the background on small screens
            sm: "15%", // Adjust for medium screens
            md: "5%", // Standard space for larger screens
          },
          color: "#fff",
          mt: {xs: -7,sm: 0-4, md: 0}
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
              md: "40px", // Standard font for larger screens
            },
          }}
        >
          Available Properties Near You{" "}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            marginBottom: 4,
            fontSize: {
              xs: "0.9rem", // Smaller font for small screens
              sm: "1rem", // Medium font for medium screens
              md: "16px", // Standard font for larger screens
            },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>
        <Box sx={{display: "flex", justifyContent: "center", gap: "21px", mb: "41px"}}>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "#fff",
              "&:hover": {
                backgroundColor: "#4D4D4D",
                color: "#fff",
              },
              color: "#000",
              minWidth: "122px",
              height: "48px",
            }}
          >
            Rent
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#E0D8C3",
              "&:hover": {
                backgroundColor: "#4D4D4D",
                color: "#fff",
              },
              color: "#000",
              minWidth: "122px",
              height: "48px",
              textTransform: "none",
            }}
          >
            Buy
          </Button>
        </Box>
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
            mx: { md: 6 },
            mb: 2,
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6049.312110584377!2d-73.92965166949828!3d40.703572024094804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25eab37fd60ef%3A0x1ff34649b0a304c9!2sHouse%20of%20Yes!5e0!3m2!1sen!2sin!4v1736509838444!5m2!1sen!2sin"
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
