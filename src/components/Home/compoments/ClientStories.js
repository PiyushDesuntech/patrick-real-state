"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

const ClientStories = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const slides = [
    {
      title: "Making Real Estate Simple and Stress-Free",
      description:
        "Nullam consectetur blandit risus eu accumsan. Fusce finibus tellus id justo maximus, non vulputate erat sollicitudin. Vestibulum at lectus sed enim volutpat blandit id non sapien. Sed non ullamcorper leo, ac interdum elit. Sed eget hendrerit nisi. Mauris porttitor eros in magna semper, at fringilla nulla luctus. Vivamus facilisis tortor sed nisl eleifend, vitae mollis velit auctor. Fusce suscipit neque nisi, gravida sollicitudin urna viverra eu.",
      clientName: "John Doe",
      clientRole: "Sales Manager",
      image: "/images/holdingHouse.svg",
    },
    {
      title: "Your Trusted Real Estate Partner",
      description:
        "Donec venenatis, arcu nec rhoncus congue, nisl elit varius ligula, vel scelerisque libero neque nec justo.",
      clientName: "Jane Smith",
      clientRole: "Real Estate Consultant",
      image: "/images/holdingHouse.svg",
    },
    {
      title: "Helping You Find Your Dream Home",
      description:
        "Praesent fermentum elit non eros euismod, sed auctor odio viverra. Pellentesque et turpis et risus consequat auctor.",
      clientName: "Michael Johnson",
      clientRole: "Home Buyer",
      image: "/images/holdingHouse.svg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const current = slides[currentSlide];

  return (
    <Box
      sx={{
        backgroundImage: "url(/images/clientBG.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="xl" sx={{px: {md: 8}, mt: 8}}>
        <Box textAlign="center">
          <Typography variant="h5" fontWeight="semibold" sx={{fontSize: "40px"}}>
            Client Stories
          </Typography>
          <Typography variant="body2" sx={{fontSize: "16px"}}>
            Morbi at felis ullamcorper ipsum tsed sed mi.
          </Typography>
        </Box>
        <Grid
          container
          spacing={isSmallScreen ? 2 : 4}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
              <Typography variant="h4" fontWeight="semibold" gutterBottom sx={{fontSize: "40px"}}>
                {current.title}
              </Typography>
              <Box mt={10}>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "50%",
                    minWidth: "64px",
                    minHeight: "64px",
                    backgroundColor: "#f9e7d5",
                    "&:hover": { backgroundColor: "#ebd2b0" },
                  }}
                >
                  <PlayArrowIcon sx={{ color: "#6E6A59", fontSize: "35px" }} />
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-end", mb: 4 }}>
            <img
              src={current.image}
              alt={current.clientName}
              style={{
                maxWidth: "100%",
                maxHeight: isSmallScreen ? "200px" : "593px",
                borderRadius: "8px",
              }}
            />
            </Box>
          </Grid>
          <Grid item xs={12} md={4} >
            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            <Box>
              <Typography
                variant="body2"
                color="textSecondary"
                gutterBottom
                sx={{ marginBottom: "1.5rem" }}
              >
                {current.description}
              </Typography>
              <Typography variant="h5" fontWeight="500">
                {current.clientName} <br /><span style={{fontSize: "18px", fontWeight: 400, color: "#838383"}}> - {current.clientRole}</span>
              </Typography>
            </Box>
            <Box py={3} display="flex" justifyContent={isSmallScreen ? "center" : "flex-start"}>
              <IconButton
                onClick={handlePrev}
                sx={{
                  backgroundColor: "#eaeaea",
                  "&:hover": { backgroundColor: "#cccccc" },
                  borderRadius: 1,
                  px: 2,
                }}
              >
                <WestIcon />
              </IconButton>
              <IconButton
                onClick={handleNext}
                sx={{
                  backgroundColor: "#eaeaea",
                  marginLeft: "1rem",
                  "&:hover": { backgroundColor: "#cccccc" },
                  borderRadius: 1,
                  px: 2,
                }}
              >
                <EastIcon />
              </IconButton>
            </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ClientStories;
