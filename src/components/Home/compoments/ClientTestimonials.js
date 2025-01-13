"use client";
import React from "react";
import Slider from "react-slick";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  CardMedia,
  Container,
  Rating,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    role: "Sales Manager",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat leo nisi, in elementum mi feugiat equat. In nisi urna, pretium in congue in, ultrices in turpisesent semper nulla vestibulum, pellentesque odio a, finibus auguespendisse potenti. ",
    avatar: "/images/client1.svg",
    rating: 5,
  },
  {
    name: "Elin SkoGlund",
    role: "Sales Manager",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat leo nisi, in elementum mi feugiat equat. In nisi urna, pretium in congue in, ultrices in turpisesent semper nulla vestibulum, pellentesque odio a, finibus auguespendisse potenti. ",
    avatar: "/images/client2.svg",
    rating: 5,
  },
  {
    name: "Tor Myhrman",
    role: "Sales Manager",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat leo nisi, in elementum mi feugiat equat. In nisi urna, pretium in congue in, ultrices in turpisesent semper nulla vestibulum, pellentesque odio a, finibus auguespendisse potenti. ",
    avatar: "/images/client3.svg",
    rating: 5,
  },
];

const CustomArrow = ({ onClick, direction }) => (
  <Button
    onClick={onClick}
    sx={{
      minWidth: 0,
      width: 48,
      height: 52,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      color: "#000",
      borderRadius: "4px",
      ":hover": { backgroundColor: "#E8E1C4", border: "none" },
      marginLeft: direction === "right" ? "8px" : "0",
      p: 1,
      border: "1px solid #A5A5A5"
    }}
  >
    {direction === "left" ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
  </Button>
);

const ClientTestimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 960,
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

  const sliderRef = React.useRef();

  return (
   <Container maxWidth="xl" sx={{px: {lg: 7, xs: 1}}}>
     <Box sx={{ position: "relative", padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Client Testimonials
      </Typography>
      <Typography variant="body1" gutterBottom>
        Morbi at felis ullamcorper ipsum.
      </Typography>

      <Box
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          display: "flex",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <CustomArrow
          direction="left"
          onClick={() => sliderRef.current.slickPrev()}
        />
        <CustomArrow
          direction="right"
          onClick={() => sliderRef.current.slickNext()}
        />
      </Box>

      {/* Slider */}
      <Slider {...settings} ref={sliderRef}>
        {testimonials.map((testimonial, index) => (
         <Box  key={index} sx={{p: {xs: 0, md: 2}, mt: 3,}}>
             <Card
            sx={{
              p: 2,
              backgroundColor: "#fff",
            //   boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            boxShadow: "none",
            border: "2px solid #D5D5D5",
            "&:hover":{border: "none", boxShadow: 6, background: "#E8E1C4"},
            }}
          >
            <CardContent>
                <Image
                  src="/images/comma.svg"
                  alt="Colonial Realty Associates"
                  width={100}
                  height={100}
                  style={{ objectFit: "contain" }}
                />
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {testimonial.text}
              </Typography>
              <Button size="small" sx={{textTransform: "none", }}>Read full story</Button>
              <Box sx={{ display: "flex", alignItems: "center", mt: 2, }}>
                <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ width: 80, height: 80 }}/>
                <Box ml={2} sx={{display: "flex", flexDirection: "column",}}>
                  <Typography variant="subtitle1" sx={{fontSize: "22px"}}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="caption" sx={{fontSize: "16px", color: "#585858"}}>
                    {testimonial.role}
                  </Typography>
                  <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                </Box>
              </Box>
            </CardContent>
          </Card>
         </Box>
        ))}
      </Slider>
    </Box>
   </Container>
  );
};

export default ClientTestimonials;
