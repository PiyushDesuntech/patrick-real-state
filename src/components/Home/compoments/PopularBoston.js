import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import React from "react";
import Image from "next/image";

export default function PopularBoston() {
  return (
    <Container maxWidth="xl" sx={{ px: { lg: 7, xs: 1 }, mt: "100px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "baseline",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "40px", fontWeight: 500 }}>
            Popular Boston Locations
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400 }}>
            Handpicked propertiesby our team.
          </Typography>
        </Box>
        <Box>
          <Button
            sx={{
              textTransform: "none",
              color: "#585858",
              "&:hover": { color: "#585858" },
            }}
            endIcon={<ArrowForwardIosOutlinedIcon />}
          >
            Explore All Properties
          </Button>
        </Box>
      </Box>
      <Box sx={{mt: "79px"}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Image
                src="/images/Popular1.svg"
                alt="Allston"
                layout="responsive"
                width={650}
                height={500}
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Image
                src="/images/Popular2.svg"
                alt="Back Bay"
                layout="responsive"
                width={650}
                height={500}
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Image
                src="/images/Popular3.svg"
                alt="Beacon Hills"
                layout="responsive"
                width={650}
                height={500}
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
