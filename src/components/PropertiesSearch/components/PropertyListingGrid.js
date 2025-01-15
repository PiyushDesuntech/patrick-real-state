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
  Divider,
  Avatar,
  Button,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/navigation";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const PropertyListingGrid = () => {
  const [sort, setSort] = useState("Relevance");
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handlePropertyClick = (id) => {
    router.push(`/property-list/property-details/${id}`);
  };

  const properties = [
    {
      id: 1,
      type: "Apartment",
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
      type: "Modern Villa",
      title: "Gorgeous Villa Bay",
      location: "325 E 84th St, New York",
      beds: 2,
      baths: 1,
      sqft: 120,
      price: 8000,
      yearsAgo: 5,
      image: "/images/porperty2.svg",
      tag: "For Sale",
    },
    {
      id: 3,
      type: "Apartment",
      title: "Anyway Apartments",
      location: "932 1st Avenue NY",
      beds: 3,
      baths: 1,
      sqft: 330,
      price: 150,
      yearsAgo: 5,
      image: "/images/porperty3.svg",
      tag: "For Sale",
    },
    {
      id: 4,
      type: "Apartment",
      title: "Selway Apartments",
      location: "932 1st Avenue NY",
      beds: 3,
      baths: 1,
      sqft: 3300,
      price: 150,
      yearsAgo: 5,
      image: "/images/porperty4.svg",
      tag: "For Sale",
    },
    {
      id: 5,
      type: "Town House",
      title: "House on the Hollywood",
      location: "15-45 Ocean Blvd, Miami",
      beds: 3,
      baths: 2,
      sqft: 200,
      price: 8500,
      yearsAgo: 3,
      image: "/images/porperty5.svg",
      tag: "For Sale",
    },
    {
      id: 6,
      type: "Apartment",
      title: "Luxury Family Home",
      location: "19-33 Ditmars Blvd, Astoria",
      beds: 6,
      baths: 4,
      sqft: 350,
      price: 9500,
      yearsAgo: 1,
      image: "/images/porperty6.svg",
      tag: "For Sale",
    },
    {
      id: 7,
      type: "Apartment",
      title: "Eaton Garth Penthouse",
      location: "25-25 Broadway, Astoria",
      beds: 6,
      baths: 4,
      sqft: 350,
      price: 9500,
      yearsAgo: 1,
      image: "/images/porperty7.svg",
      tag: "For Sale",
    },
    {
      id: 8,
      type: "Apartment",
      title: "Skyper Pool Apartment",
      location: "318 E 84th St, New York",
      beds: 6,
      baths: 4,
      sqft: 350,
      price: 9500,
      yearsAgo: 1,
      image: "/images/porperty2.svg",
      tag: "For Sale",
    },
    {
      id: 9,
      type: "Apartment",
      title: "North Dillard Street",
      location: "20-30 Steinway St, Queens",
      beds: 6,
      baths: 4,
      sqft: 350,
      price: 9500,
      yearsAgo: 1,
      image: "/images/porperty4.svg",
      tag: "For Sale",
    },
    {
      id: 10,
      type: "Apartment",
      title: "Green Hill House",
      location: "30-25 Green Rd, California",
      beds: 6,
      baths: 4,
      sqft: 350,
      price: 9500,
      yearsAgo: 1,
      image: "/images/porperty4.svg",
      tag: "For Sale",
    },
    {
      id: 11,
      type: "Apartment",
      title: "Green Hill House",
      location: "30-25 Green Rd, California",
      beds: 6,
      baths: 4,
      sqft: 350,
      price: 9500,
      yearsAgo: 1,
      image: "/images/porperty6.svg",
      tag: "For Sale",
    },
  ];

  const menuOptions = [
    { label: "Relevance", value: "Relevance" },
    { label: "Price - Low to High", value: "PriceLowToHigh" },
    { label: "Price - High to Low", value: "PriceHighToLow" },
    { label: "Most Recent", value: "MostRecent" },
    { label: "Rate/sqft - Low to High", value: "RatePerSqftLowToHigh" },
    { label: "Rate/sqft - High to Low", value: "RatePerSqftHighToLow" },
  ];

  const menuItems = menuOptions.flatMap((option, index) => [
    <MenuItem
      key={option.value}
      value={option.value}
      sx={{
        fontWeight: sort === option.value ? 600 : "normal",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ListItemText sx={{ fontWeight: sort === option.value ? 600 : "normal" }}>
        {option.label}
      </ListItemText>
      {sort === option.value && (
        <CheckCircleOutlineIcon fontSize="small" color="success" />
      )}
    </MenuItem>,
    index < menuOptions.length - 1 && <Divider key={`divider-${index}`} />,
  ]);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  const currentProperties = properties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Box sx={{ padding: 3 }}>
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
          background: "#fff",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography variant="body1">
          Showing 1 – {properties.length} of {properties.length} results
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography>Sort By</Typography>
          <FormControl
            variant="outlined"
            size="small"
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none", // No border around the field
              },
              "& .MuiOutlinedInput-root": {
                paddingRight: "8px", // Adjust padding for the dropdown icon
              },
              "& .MuiSelect-icon": {
                top: "calc(50% - 12px)", // Center align the arrow icon
                right: "8px", // Align icon to the right
              },
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "none", // No border on focus
              },
            }}
          >
            <Select
              value={sort}
              onChange={handleSortChange}
              displayEmpty
              renderValue={(selected) => {
                const selectedOption = menuOptions.find(
                  (option) => option.value === selected
                );
                return selectedOption ? selectedOption.label : "";
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    borderRadius: "8px", // Rounded corners for dropdown menu
                    boxShadow: 5, // Subtle shadow
                    marginTop: "20px",
                    "& .MuiMenuItem-root": {
                      padding: "12px 16px",
                    },
                    "& .MuiDivider-root": {
                      margin: "0 16px",
                    },
                  },
                },
              }}
              sx={{
                "& .MuiSelect-select": {
                  padding: "8px 16px",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                },
              }}
            >
              {menuItems}
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Grid container spacing={2}>
        {currentProperties.map((property) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={property.id}
            sx={{ py: 2, cursor: "pointer" }}
            onClick={() => handlePropertyClick(property.id)}
          >
            <Box
              sx={{
                border: "2px solid #D8D8D8",

                borderRadius: 2,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#fff",
                // p: "14px",
                justifyContent: "space-between",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.02)",
                //   boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
                },
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  p: "14px",
                }}
              >
                <Box
                  sx={{
                    height: "273px",
                    width: { xs: "100%", sm: "100%" },
                    backgroundImage: `url(${property.image})`,
                    borderRadius: 2,
                    p: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", gap: 2 }}>
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
                    <Chip
                      label="Featured"
                      sx={{
                        bgcolor: "#E8E1C4",
                        color: "#4D4D4D",
                        width: "fit-content",
                        borderRadius: 1,
                        fontSize: "14px",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: "27px",
                          fontWeight: 600,
                          color: "#fff",
                        }}
                      >
                        ${property.price}
                      </Typography>
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
                    {property.type}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 600, fontSize: "30px", color: "#484848" }}
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
                      fontSize: "21px",
                    }}
                  >
                    <PlaceOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
                    {property.location}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      maxWidth: 300,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "21px",
                        fontWeight: 400,
                        color: "#484848",
                      }}
                    >
                      Beds: {property.beds}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "21px",
                        fontWeight: 400,
                        color: "#484848",
                      }}
                    >
                      Baths: {property.baths}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "21px",
                        fontWeight: 400,
                        color: "#484848",
                      }}
                    >
                      Sqft: {property.sqft}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Divider />
            </Box>
          </Grid>
        ))}
      </Grid>

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

export default PropertyListingGrid;
