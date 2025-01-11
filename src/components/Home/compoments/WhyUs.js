import React from "react";
import Image from "next/image";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Container,
} from "@mui/material";

const data = [
  {
    icon: "/images/financing.svg",
    title: "Trusted By Thousands",
    description:
      "Curabitur viverra, risus non laoreet molestie, erat justo porta urna, quis consequat ante augue commodo eros. Fusce convallis sodales lacus.",
  },
  {
    icon: "/images/Trusted.svg", 
    title: "Wide Range Of Properties",
    description:
      "Morbi nec scelerisque metus, vel iaculis dolor. Vivamus consequat felis quam, nec fringilla leo finibus in. Duis pulvinar nisi nec ultricies aliquet.",
  },
  {
    icon: "/images/wideRange.svg",
    title: "Financing Made Easy",
    description:
      "Praesent eleifend nunc in luctus ultrices. Pellentesque sed mauris sed felis consectetur mollis non nec tortor. In sit amet semper nibh.",
  },
];

const ResponsiveCards = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ padding: {md: 7}, mt: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Why Choose Us
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          We provide full service at every step
        </Typography>
        <Grid container spacing={4} mt={2}>
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  boxShadow: 3,
                  padding: "1rem",
                  borderRadius: "8px",
                  transition: "background-color 0.5s ease, color 0.5s ease",
                  "&:hover": {
                    backgroundColor: "#343433",
                    color: "#fff",
                  },
                 
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                    // gap: "36px",
                    height: {md: "360px"},
                  }}
                >
                  <Box
                    sx={{
                      width: "160px",
                      height: "160px",
                      borderRadius: "50%",
                      background: "#E8E1C4",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      // layout="responsive"
                      // objectFit="cover"
                      width={74}
                      height={74}
                    />
                  </Box>
                 <Box>
                 <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                 </Box>
                  <Box>
                  <Typography variant="body2" >
                    {item.description}
                  </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ResponsiveCards;
