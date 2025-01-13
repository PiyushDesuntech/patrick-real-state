"use client";
import React from "react";
import Slider from "react-slick";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  IconButton,
  Container,
  Button,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    images: ["/images/Feature1.svg", "/images/Feature2.svg"],
    title: "Luxury Family Home",
    price: "$1350/mo",
    beds: 2,
    baths: 1,
    sqft: 500,
    tag: "For Sale",
    feature: "Feature",
  },
  {
    images: ["/images/Feature2.svg", "/images/Feature3.svg"],
    title: "House Hollywood",
    price: "$2250/mo",
    beds: 4,
    baths: 2,
    sqft: 1600,
    tag: "For Rent",
    feature: "Feature",
  },
  {
    images: ["/images/Feature3.svg", "/images/Feature1.svg"],
    title: "Selway Apartment",
    price: "$1550/mo",
    beds: 1,
    baths: 1,
    sqft: 500,
    tag: "For Sale",
    feature: "Feature",
  },
  {
    images: ["/images/Feature3.svg", "/images/Feature2.svg"],
    title: "Arlo Apartment",
    price: "$2150/mo",
    beds: 4,
    baths: 2,
    sqft: 1500,
    tag: "For Rent",
    feature: "Feature",
  },
];

const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      left: { xs: "-15px", sm: "-15px", lg: "-50px" },
      top: "53%",
      transform: "translateY(-50%)",
      zIndex: 10,
      backgroundColor: "#fff",
      color: "#D9D9D9",
      border: "2px solid #D9D9D9",
      "&:hover": {
        backgroundColor: "#f0f0f0",
        border: "2px solid #BAAE78",
        color: "#BAAE78",
      },
    }}
  >
    <ArrowBackIos />
  </IconButton>
);
const PrevArrow1 = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      left: 1,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 10,
      backgroundColor: "#fff",
      color: "#D9D9D9",
      backgroundColor: "rgba(252, 250, 250, 0.43)",
      color: "#D9D9D9",
      // border: "2px solid #D9D9D9",
      "&:hover": {
        backgroundColor: "rgba(249, 248, 248, 0.17)",
      },
    }}
  >
    <ArrowRightAltIcon sx={{ transform: "rotate(180deg)" }} />
  </IconButton>
);

const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      right: { xs: "-15px", sm: "-15px", lg: "-50px" },
      top: "53%",
      transform: "translateY(-50%)",
      zIndex: 10,
      backgroundColor: "#fff",
      color: "#D9D9D9",
      border: "2px solid #D9D9D9",
      "&:hover": {
        backgroundColor: "#f0f0f0",
        border: "2px solid #BAAE78",
        color: "#BAAE78",
      },
    }}
  >
    <ArrowForwardIos />
  </IconButton>
);
const NextArrow1 = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      right: 1,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 10,
      backgroundColor: "rgba(252, 250, 250, 0.43)",
      color: "#D9D9D9",
      // border: "2px solid #D9D9D9",
      "&:hover": {
        backgroundColor: "rgba(249, 248, 248, 0.17)",
      },
    }}
  >
    <ArrowRightAltIcon />
  </IconButton>
);

const FeatureProperties = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
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

  const cardSliderSettings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: false,
    // autoplay: true,
    // autoplaySpeed: 3000,
    prevArrow: <PrevArrow1 />,
    nextArrow: <NextArrow1 />,
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 4, mb: 2, px: { lg: 4 } }}>
        <Typography sx={{ textAlign: "center" }} variant="h4">
          Featured Properties.
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          Handpicked properties by our team.
        </Typography>
        <Slider {...settings}>
          {data.map((item, index) => (
            <Box key={index} mt={3} sx={{ p: { xs: 4, lg: 0.5 } }}>
              <Card
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 3,
                  height: { xs: "280px", md: "340px", lg: "385px" },
                  width: { xs: "100%", lg: "339px" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  "&:hover .image-container": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <Box sx={{ position: "relative", overflow: "hidden" }}>
                  <Slider {...cardSliderSettings}>
                    {item.images.map((img, imgIndex) => (
                      <Box
                        key={imgIndex}
                        className="image-container" 
                        sx={{
                          height: { xs: "280px", md: "340px", lg: "387px" },
                          width: { xs: "100%", lg: "339px" },
                          backgroundImage: `url(${img})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          transition: "transform 0.3s ease-in-out",
                        }}
                      />
                    ))}
                  </Slider>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: "100%",
                    height: { xs: "80%", md: "95%" },
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
                        fontSize: "14px",
                      }}
                    />
                    <Chip
                      label={item.feature}
                      sx={{
                        bgcolor: "#E8E1C4",
                        color: "#4D4D4D",
                        width: "fit-content",
                        borderRadius: 1,
                        fontSize: "14px",
                      }}
                    />
                  </Box>
                  <CardContent sx={{ color: "#fff" }}>
                    <Typography variant="h6" fontWeight="bold">
                      {item.title}
                    </Typography>
                    <Typography variant="body1" mt={1}>
                      {item.price}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body2"
                        mt={1}
                        sx={{ fontSize: "12px" }}
                      >
                        Beds: {item.beds} • Baths: {item.baths} • Sqft:{" "}
                        {item.sqft}
                      </Typography>
                      <Box sx={{ display: "flex", gap: "8px" }}>
                        <IconButton
                          sx={{
                            borderRadius: "3px",
                            background: "rgba(255, 255, 255, 0.1)",
                            color: "#fff",
                            "&:hover": {
                              background: "rgba(255, 255, 255, 0.48)",
                              color: "#4D4D4D",
                            },
                          }}
                        >
                          <FavoriteBorderIcon />
                        </IconButton>
                        <IconButton
                          sx={{
                            borderRadius: "3px",
                            background: "rgba(255, 255, 255, 0.1)",
                            color: "#fff",
                            "&:hover": {
                              background: "rgba(255, 255, 255, 0.48)",
                              color: "#4D4D4D",
                            },
                          }}
                        >
                          <ShareIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            </Box>
          ))}
        </Slider>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "38px" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#4D4D4D",
                color: "#fff",
              },
              color: "#000",
              border: "2px solid #000",
              textTransform: "none",
              px: 5,
              py: 1,
            }}
          >
            View More
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default FeatureProperties;
