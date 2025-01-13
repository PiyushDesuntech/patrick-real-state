"use client";
import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Pagination,
  Chip,
  IconButton,
} from "@mui/material";
import Image from "next/image"; // Assuming you're using Next.js
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";

const PropertyListing = () => {
  const [sort, setSort] = useState("Default");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const properties = [
    {
      id: 1,
      title: "Diamond Manor Apartment",
      location: "22-05 Astoria Blvd, Astoria",
      beds: 4,
      baths: 2,
      sqft: 150,
      price: 6500,
      yearsAgo: 4,
      image: "/images/property1.svg",
      tag: "For Sale",
    },
    {
      id: 2,
      title: "Diamond Manor Apartment",
      location: "22-05 Astoria Blvd, Astoria",
      beds: 4,
      baths: 2,
      sqft: 150,
      price: 6500,
      yearsAgo: 4,
      image: "/images/property1.svg",
      tag: "For Sale",
    },
    {
      id: 3,
      title: "Diamond Manor Apartment",
      location: "22-05 Astoria Blvd, Astoria",
      beds: 4,
      baths: 2,
      sqft: 150,
      price: 6500,
      yearsAgo: 4,
      image: "/images/property1.svg",
      tag: "For Sale",
    },
    {
      id: 4,
      title: "Luxury Villa",
      location: "10-23 Park Ave, Brooklyn",
      beds: 5,
      baths: 3,
      sqft: 250,
      price: 12500,
      yearsAgo: 2,
      image: "/images/property1.svg",
      tag: "For Sale",
    },
    {
      id: 5,
      title: "Ocean View Condo",
      location: "15-45 Ocean Blvd, Miami",
      beds: 3,
      baths: 2,
      sqft: 200,
      price: 8500,
      yearsAgo: 3,
      image: "/images/property1.svg",
      tag: "For Sale",
    },
    {
      id: 6,
      title: "Green Hill House",
      location: "30-25 Green Rd, California",
      beds: 6,
      baths: 4,
      sqft: 350,
      price: 9500,
      yearsAgo: 1,
      image: "/images/property1.svg",
      tag: "For Sale",
    },
    {
      id: 7,
      title: "Green Hill House",
      location: "30-25 Green Rd, California",
      beds: 6,
      baths: 4,
      sqft: 350,
      price: 9500,
      yearsAgo: 1,
      image: "/images/property1.svg",
      tag: "For Sale",
    },
    {
      id: 8,
      title: "Green Hill House",
      location: "30-25 Green Rd, California",
      beds: 6,
      baths: 4,
      sqft: 350,
      price: 9500,
      yearsAgo: 1,
      image: "/images/property1.svg",
      tag: "For Sale",
    },
    {
      id: 9,
      title: "Green Hill House",
      location: "30-25 Green Rd, California",
      beds: 6,
      baths: 4,
      sqft: 350,
      price: 9500,
      yearsAgo: 1,
      image: "/images/property1.svg",
      tag: "For Sale",
    },
    {
      id: 10,
      title: "Green Hill House",
      location: "30-25 Green Rd, California",
      beds: 6,
      baths: 4,
      sqft: 350,
      price: 9500,
      yearsAgo: 1,
      image: "/images/property1.svg",
      tag: "For Sale",
    },
    {
      id: 11,
      title: "Green Hill House",
      location: "30-25 Green Rd, California",
      beds: 6,
      baths: 4,
      sqft: 350,
      price: 9500,
      yearsAgo: 1,
      image: "/images/property1.svg",
      tag: "For Sale",
    },
  ];

  const itemsPerPage = 10;
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  // Slice properties for the current page
  const currentProperties = properties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Box sx={{ padding: 3 }}>
      {/* Filter and Sort Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          border: "2px solid #D8D8D8",
          borderRadius: "8px",
          px: 4,
          py: 2,
        }}
      >
        <Typography variant="body1">
          Showing 1 – {properties.length} of {properties.length} results
        </Typography>
       <Box sx={{display: "flex", gap: 2, alignItems: "center"}}>
        <Typography>Sort By</Typography>
       <FormControl
          variant="outlined"
          size="small"
          sx={{ "& .MuiOutlinedInput-root": { border: "none" } }}
        >
          <Select value={sort} onChange={handleSortChange} sx={{"& .MuiOutlinedInput-root": { border: "none" }}}>
            <MenuItem value="Default">Default</MenuItem>
            <MenuItem value="Price">Price</MenuItem>
            <MenuItem value="Newest">Newest</MenuItem>
          </Select>
        </FormControl>
       </Box>
      </Box>

      <Box>
        {currentProperties.map((property) => (
          <Box key={property.id} sx={{ py: 2 }}>
            <Box
              sx={{
                border: "2px solid #D8D8D8",
                borderRadius: 2,
                overflow: "hidden",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                backgroundColor: "#fff",
                p: "14px",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                {/* Image Section */}
                <Box
                  sx={{
                    height: { xs: "303px", sm: "303px" },
                    width: { xs: "100%", sm: "328px" },
                    backgroundImage: `url(${property.image})`,
                    borderRadius: 2,
                    p: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Chip
                      label={property.tag}
                      sx={{
                        bgcolor: "#3E4C66",
                        color: "#fff",
                        width: "fit-content",
                        borderRadius: 1,
                        fontSize: "14px",
                      }}
                    />
                  </Box>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <IconButton
                      sx={{
                        borderRadius: "3px",
                        background: "rgba(32, 32, 32, 0.3)",
                        color: "#fff",
                        "&:hover": {
                          background: "#E0D8C3",
                          color: "#4D4D4D",
                        },
                      }}
                    >
                      <FavoriteBorderIcon />
                    </IconButton>
                    <IconButton
                      sx={{
                        borderRadius: "3px",
                        background: "rgba(32, 32, 32, 0.3)",
                        color: "#fff",
                        "&:hover": {
                          background: "#E0D8C3",
                          color: "#4D4D4D",
                        },
                      }}
                    >
                      <SyncAltOutlinedIcon />
                    </IconButton>
                    <IconButton
                      sx={{
                        borderRadius: "3px",
                        background: "rgba(32, 32, 32, 0.3)",
                        color: "#fff",
                        "&:hover": {
                          background: "#E0D8C3",
                          color: "#4D4D4D",
                        },
                      }}
                    >
                      <ReplyOutlinedIcon sx={{ transform: "scaleX(-1)" }} />
                    </IconButton>
                  </Box>
                </Box>

                {/* Details Section */}
                <Box
                  sx={{
                    padding: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#B3A87A", fontSize: "17px" }}
                  >
                    Apartment
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 600, fontSize: "22px", color: "#484848" }}
                  >
                    {property.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 1,
                      color: "#484848",
                    }}
                  >
                    <PlaceOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
                    {property.location}
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="body2">
                      Beds: {property.beds}
                    </Typography>
                    <Typography variant="body2">
                      Baths: {property.baths}
                    </Typography>
                    <Typography variant="body2">
                      Sqft: {property.sqft}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {/* Footer Section */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  px: 2,
                  py: 1,
                  //   borderTop: '1px solid #ddd',
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "27px",
                    fontWeight: 600,
                    color: "#484848",
                  }}
                >
                  ${property.price}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {property.yearsAgo} years ago
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Pagination Section */}
      <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#484848",
              border: "2px solid #E6E6E6",
              fontSize: "17px",
            },
            "& .MuiPaginationItem-page.Mui-selected": {
              backgroundColor: "#E8E1C4",
              border: "2px solid #E6E6E6",
              color: "#484848",
            },
            "& .MuiPaginationItem-previousNext": {
              color: "#484848",
              border: "2px solid #E6E6E6",
              fontSize: "17px",
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "#E8E1C4",
              border: "2px solid #E6E6E6",
            },
          }}
        />{" "}
      </Box>
    </Box>
  );
};

export default PropertyListing;
