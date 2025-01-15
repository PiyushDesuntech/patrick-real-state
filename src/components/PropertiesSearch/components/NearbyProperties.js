import React from "react";
import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const properties = [
  {
    image: "images/nearby1.svg", // Replace with actual image URLs
    title: "Diamond Manor",
    price: "$6500",
    beds: 4,
    baths: 2,
    sqft: 150,
  },
  {
    image: "images/nearby2.svg",
    title: "Eaton Garth Penthouse",
    price: "$7500",
    beds: 4,
    baths: 1,
    sqft: 220,
  },
  {
    image: "images/nearby3.svg",
    title: "Skyper Pool Apartment",
    price: "$1200/mo",
    beds: 3,
    baths: 2,
    sqft: 110,
  },
  {
    image: "images/nearby4.svg",
    title: "North Dillard Street",
    price: "$5500",
    beds: 4,
    baths: 1,
    sqft: 120,
  },
];

const PropertyCard = ({ property }) => (
  <Card
    sx={{
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      mb: 1,
      boxShadow: "none"
    }}
  >
    <CardMedia
      component="img"
      image={property.image}
      alt={property.title}
      sx={{ width: { xs: "100%", sm: 100 }, height: 100 }}
    />
    <CardContent sx={{ flex: 1 }}>
      <Typography variant="h6" noWrap>
        {property.title}
      </Typography>
      <Typography color="text.secondary">{property.price}</Typography>
      <Typography variant="body2">
        Beds: {property.beds} Baths: {property.baths} Sqft: {property.sqft}
      </Typography>
    </CardContent>
  </Card>
);

const NearbyProperties = () => (
  <Box p={3}>
    <Box  sx={{
        // width: "300px",
        padding: "30px",
        borderRadius: "8px",
        // boxShadow: 1,
        border: "2px solid #D8D8D8",
        bgcolor: "background.paper",
      }}>
    <Typography variant="h6" sx={{ mb: 2 }}>
      Nearby Properties
    </Typography>
    {properties.map((property, index) => (
      <PropertyCard key={index} property={property} />
    ))}
  </Box>
  </Box>
);

export default NearbyProperties;
