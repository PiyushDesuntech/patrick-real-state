import { Box, Typography } from "@mui/material";
import React from "react";
import PropertySearch from "./PropertySearch";

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundImage: "url(/images/HomeBg.svg)", // Path to your image
        backgroundSize: "cover", // Ensures the image covers the entire area
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
        backgroundPosition: "center", // Centers the image
        height: "100vh", // Adjust height as needed
        width: "100%", // Adjust width as needed
        mt: -15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center,",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          mt: {xs: 10}
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px",p: 1 }}>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: 600,
              fontSize: {
                xs: "1.5rem", // Small screens
                sm: "2rem", // Medium screens
                md: "2.5rem", // Larger screens
                lg: "3rem", // Extra large screens
              },
            }}
          >
            Your Property, Our Priority.
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "0.875rem", // Small screens
                sm: "1rem", // Medium screens
                md: "1.125rem", // Larger screens
                lg: "1.25rem", // Extra large screens
              },
            }}
          >
            from as low as $10 per day with limited time offer
          </Typography>
          <PropertySearch />
        </Box>
      </Box>
    </Box>
  );
}
