"use client";
import React from "react";
import Slider from "react-slick";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  IconButton,
  Container,
  Button,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";

const data = [
  {
    image: "/images/Feature1.svg",
    title: "Luxury Family Home",
    price: "$1350/mo",
    beds: 2,
    baths: 1,
    sqft: 500,
    tag: "For Sale",
    feature: "Feature",
  },
  {
    image: "/images/Feature2.svg",
    title: "House Hollywood",
    price: "$2250/mo",
    beds: 4,
    baths: 2,
    sqft: 1600,
    tag: "For Rent",
    feature: "Feature",
  },
  {
    image: "/images/Feature3.svg",
    title: "Selway Apartment",
    price: "$1550/mo",
    beds: 1,
    baths: 1,
    sqft: 500,
    tag: "For Sale",
    feature: "Feature",
  },
  {
    image: "/images/Feature3.svg",
    title: "Arlo Apartment",
    price: "$2150/mo",
    beds: 4,
    baths: 2,
    sqft: 1500,
    tag: "For Rent",
    feature: "Feature",
  },
];

// Custom Previous Arrow
// Custom Previous Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        left: { xs: "-0px", sm: "-10px", md: "-20px" }, // Adjust left position for responsiveness
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        backgroundColor: "#fff",
        boxShadow: 2,
        "&:hover": {
          backgroundColor: "#f0f0f0",
        },
      }}
    >
      <ArrowBackIos />
    </IconButton>
  );
};

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        right: { xs: "-00px", sm: "-10px", md: "-20px" }, // Adjust right position for responsiveness
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        backgroundColor: "#fff",
        boxShadow: 2,
        "&:hover": {
          backgroundColor: "#f0f0f0",
        },
      }}
    >
      <ArrowForwardIos />
    </IconButton>
  );
};

const FeatureProperties = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Box sx={{ mt: 4, mb: 2 }}>
        <Typography sx={{ textAlign: "center" }} variant="h4">
          Featured Properties.
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          Handpicked propertiesby our team.
        </Typography>
        <Slider {...settings}>
          {data.map((item, index) => (
            <Box key={index} p={1} mt={3}>
              <Card
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 3,
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: "350px",
                  width: "100%",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", gap: 1, m: 2 }}>
                  <Chip
                    label={item.tag}
                    sx={{
                      bgcolor: "#3E4C66",
                      color: "#fff",
                      width: "fit-content",
                      borderRadius: 1,
                    }}
                  />
                  <Chip
                    label={item.feature}
                    sx={{
                      bgcolor: "#E8E1C4",
                      color: "#4D4D4D",
                      width: "fit-content",
                      borderRadius: 1,
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography variant="body1" mt={1}>
                    {item.price}
                  </Typography>
                 <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}> 
                 <Typography variant="body2" mt={1} sx={{fontSize: "12px"}}>
                    Beds: {item.beds} • Baths: {item.baths} • Sqft: {item.sqft}
                  </Typography>
                  <Box sx={{ display: "flex" }}>
                    <IconButton>
                      <FavoriteBorderIcon sx={{ color: "#fff", fontSize: "16px" }} />
                    </IconButton>
                    <IconButton>
                      <ShareIcon sx={{ color: "#fff", fontSize: "16px" }} />
                    </IconButton>
                  </Box>
                 </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
        <Box sx={{display: "flex", justifyContent: "center", mt: 3}}>
            <Button variant="outlined" sx={{textTransform: "none"}}>View More</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default FeatureProperties;
