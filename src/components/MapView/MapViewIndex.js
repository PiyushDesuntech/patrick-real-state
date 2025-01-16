"use client";
import React, { useState } from "react";
import { Grid, Box, Container } from "@mui/material";
import HomeCards from "./components/HomeCards";
import Filter from "./components/Filter";
import MapView from "./components/MapView";

const properties = [
  {
    id: 1,
    title: "Diamond Manor Apartment",
    type: "For Rent",
    address: "145 Willow St #2, Cambridge, MA 02141",
    beds: 2,
    baths: 2,
    sqft: 0,
    dateAvailable: "12/10/2025",
    price: 3000,
    homeType: "Apartment",
    image: "/images/mapview1.svg",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.550029100468!2d-71.0940433240291!3d42.373427971191546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370b41ff4d93d%3A0xd01743bec9a431df!2s145%20Willow%20St%20%232%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sin!4v1737012416802!5m2!1sen!2sin",
  },
  {
    id: 2,
    title: "Villa Bay",
    type: "For Sale",
    address: "137 Willow St #2, Cambridge, MA 02141",
    beds: 2,
    baths: 2,
    sqft: 150,
    price: 500000,
    homeType: "Condo",
    image: "/images/mapview2.svg",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d736.8877161996699!2d-71.09211213039339!3d42.373410164426055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370b41fb83f01%3A0xa59eb07b5f4331e6!2s137%20Willow%20St%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sin!4v1737013795316!5m2!1sen!2sin",
  },
  {
    id: 3,
    title: "Diamond Manor Apartment",
    type: "For Rent",
    address: "145 Willow St #2, Cambridge, MA 02141",
    beds: 2,
    baths: 2,
    sqft: 0,
    dateAvailable: "12/10/2025",
    price: 3000,
    homeType: "Apartment",
    image: "/images/mapview3.svg",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.550029100468!2d-71.0940433240291!3d42.373427971191546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370b41ff4d93d%3A0xd01743bec9a431df!2s145%20Willow%20St%20%232%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sin!4v1737012416802!5m2!1sen!2sin",
  },
  {
    id: 4,
    title: "Villa Bay",
    type: "For Sale",
    address: "145 Willow St #2, Cambridge, MA 02141",
    beds: 2,
    baths: 2,
    sqft: 150,
    price: 500000,
    homeType: "Condo",
    image: "/images/mapview4.svg",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.550029100468!2d-71.0940433240291!3d42.373427971191546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370b41ff4d93d%3A0xd01743bec9a431df!2s145%20Willow%20St%20%232%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sin!4v1737012416802!5m2!1sen!2sin",
  },
  {
    id: 5,
    title: "Diamond Manor Apartment",
    type: "For Rent",
    address: "145 Willow St #2, Cambridge, MA 02141",
    beds: 2,
    baths: 2,
    sqft: 0,
    dateAvailable: "12/10/2025",
    price: 3000,
    homeType: "Apartment",
    image: "/images/mapview5.svg",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.550029100468!2d-71.0940433240291!3d42.373427971191546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370b41ff4d93d%3A0xd01743bec9a431df!2s145%20Willow%20St%20%232%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sin!4v1737012416802!5m2!1sen!2sin",
  },
  {
    id: 6,
    title: "Villa Bay",
    type: "For Sale",
    address: "145 Willow St #2, Cambridge, MA 02141",
    beds: 2,
    baths: 2,
    sqft: 150,
    price: 500000,
    homeType: "Condo",
    image: "/images/mapview6.svg",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.550029100468!2d-71.0940433240291!3d42.373427971191546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370b41ff4d93d%3A0xd01743bec9a431df!2s145%20Willow%20St%20%232%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sin!4v1737012416802!5m2!1sen!2sin",
  },
  {
    id: 7,
    title: "Diamond Manor Apartment",
    type: "For Rent",
    address: "145 Willow St #2, Cambridge, MA 02141",
    beds: 2,
    baths: 2,
    sqft: 0,
    dateAvailable: "12/10/2025",
    price: 3000,
    homeType: "Apartment",
    image: "/images/mapview3.svg",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.550029100468!2d-71.0940433240291!3d42.373427971191546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370b41ff4d93d%3A0xd01743bec9a431df!2s145%20Willow%20St%20%232%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sin!4v1737012416802!5m2!1sen!2sin",
  },
  {
    id: 8,
    title: "Villa Bay",
    type: "For Sale",
    address: "145 Willow St #2, Cambridge, MA 02141",
    beds: 2,
    baths: 2,
    sqft: 150,
    price: 500000,
    homeType: "Condo",
    image: "/images/mapview4.svg",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.550029100468!2d-71.0940433240291!3d42.373427971191546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370b41ff4d93d%3A0xd01743bec9a431df!2s145%20Willow%20St%20%232%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sin!4v1737012416802!5m2!1sen!2sin",
  },
];

const MapViewIndex = () => {
  const [filters, setFilters] = useState({
    type: "",
    price: "",
    beds: "",
    baths: "",
    homeType: "",
  });
  const [selectedLocation, setSelectedLocation] = useState(null);
  const filteredProperties = properties.filter((property) => {
    return (
      (filters.type === "" || property.type === filters.type) &&
      (filters.price === "" ||
        (filters.price === "<3000" && property.price < 3000) ||
        (filters.price === "3000-5000" &&
          property.price >= 3000 &&
          property.price <= 5000) ||
        (filters.price === ">5000" && property.price > 5000)) &&
      (filters.beds === "" || property.beds === filters.beds) &&
      (filters.baths === "" || property.baths === filters.baths) &&
      (filters.homeType === "" || property.homeType === filters.homeType)
      //   (filters.address === "" ||
      //     property.address.toLowerCase().includes(filters.address.toLowerCase()))
    );
  });

  const handleCardClick = (locationSrc) => {
    setSelectedLocation(locationSrc);
  };

  return (
    <Container maxWidth="xl" sx={{ px: { lg: 4, xs: 1 }, py: 3 }}>
      <Filter filters={filters} setFilters={setFilters} />
      <Grid container spacing={3} sx={{display: "flex", flexWrap: "wrap-reverse"}}>
        <Grid item xs={12} sm={12} md={6}>
          <Grid container spacing={2}>
            {filteredProperties.map((property) => (
              <Grid item xs={12} sm={6} key={property.id}>
                <HomeCards property={property} onCardClick={handleCardClick} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <MapView locationSrc={selectedLocation} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MapViewIndex;
