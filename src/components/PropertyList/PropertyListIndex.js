import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import Heading from "./components/Heading";
import PropertyListing from "./components/PropertyListing";
import AdvancedSearch from "./components/AdvancedSearch";
import NearbyProperties from "./components/NearbyProperties";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

export default function PropertyListIndex() {
  return (
    <Container maxWidth="xl" sx={{ px: { lg: 7, xs: 1 } }}>
      <Heading />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          px: 3
        }}
      >
        <Box>
          <Typography
            sx={{ fontSize: "37px", fontWeight: 600, color: "#484848" }}
          >
            Properties – List
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            startIcon={<FavoriteBorderIcon />}
            sx={{
              textTransform: "none",
              borderRadius: "8px",
              color: "#4D4D4D",
              "&:hover": {
                background: "#E3E3E3",
                color: "#4D4D4D",
              },
              height: "50px",
            }}
          >
            Save Search
          </Button>
          <IconButton
            sx={{
              borderRadius: "8px",
              border: "2px solid #D8D8D8",
              color: "#4D4D4D",
              "&:hover": {
                background: "#E3E3E3",
                color: "#4D4D4D",
              },
              height: "50px",
              width: "50px",
            }}
          >
            <DashboardOutlinedIcon />
          </IconButton>
          <IconButton
            sx={{
              borderRadius: "8px",
              border: "2px solid #D8D8D8",
              color: "#4D4D4D",
              "&:hover": {
                background: "#E3E3E3",
                color: "#4D4D4D",
              },
              height: "50px",
              width: "50px",
            }}
          >
            <FormatListBulletedIcon />
          </IconButton>
        </Box>
      </Box>
      <Grid container spacing={2} mt={4}>
        <Grid item xs={12} sm={12} md={4}>
          <AdvancedSearch />
          <NearbyProperties />
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <PropertyListing />
        </Grid>
      </Grid>
    </Container>
  );
}
