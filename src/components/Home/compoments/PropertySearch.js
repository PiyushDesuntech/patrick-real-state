"use client";
import React, { useState } from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  Box,
  TextField,
  Button,
  Autocomplete,
  Grid,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const PropertySearch = () => {
  const [selectedTab, setSelectedTab] = useState("rent");

  const handleTabChange = (event, newTab) => {
    if (newTab !== null) {
      setSelectedTab(newTab);
    }
  };

  // Sample options for Autocomplete fields
  const propertyTypes = ["House", "Apartment", "Studio", "Villa"];
  const locations = ["New York", "Los Angeles", "Chicago", "Houston"];
  const priceRange = ["1000-2000", "2000-5000"];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: { xs: "0 5px 5px 5px" },
        mt: { xs: 0, sm: 4, md: 19, lg: 4 },
      }}
    >
      <ToggleButtonGroup
        value={selectedTab}
        exclusive
        onChange={handleTabChange}
        sx={{
          display: "flex",
          gap: 0,
        }}
      >
        <Box>
          <ToggleButton
            value="rent"
            sx={{
              position: "relative",
              backgroundColor: selectedTab === "rent" ? "#E8E1C4" : "white",
              color: selectedTab === "rent" ? "black" : "#000",
              textTransform: "none",
              flex: 1,
              padding: "12px 26px",
              border: "none",
              borderRadius: "8px 8px 8px 8px",
              "&:hover": {
                backgroundColor: "#4D4D4D",
                color: "white",
              },
              "&.Mui-selected": {
                backgroundColor: "#E8E1C4",
                color: "black",
                "&:hover": {
                  backgroundColor: "#4D4D4D",
                  color: "white",
                },
              },
              "&::after": selectedTab === "rent" && {
                content: '""',
                position: "absolute",
                bottom: "-8px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "0",
                height: "0",
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderTop: "8px solid #E8E1C4",
              },
            }}
          >
            Rent
          </ToggleButton>
        </Box>
        <Box>
          <ToggleButton
            value="buy"
            sx={{
              position: "relative",
              backgroundColor: selectedTab === "buy" ? "#E8E1C4" : "white",
              color: selectedTab === "buy" ? "black" : "#000",
              textTransform: "none",
              flex: 1,
              padding: "12px 26px",
              border: "none",
              borderRadius: "8px 8px 8px 8px",
              "&:hover": {
                backgroundColor: "#4D4D4D",
                color: "white",
              },
              "&.Mui-selected": {
                backgroundColor: "#E8E1C4",
                color: "black",
                "&:hover": {
                  backgroundColor: "#4D4D4D",
                  color: "white",
                },
              },
              "&::after": selectedTab === "buy" && {
                content: '""',
                position: "absolute",
                bottom: "-8px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "0",
                height: "0",
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderTop: "8px solid #E8E1C4",
              },
            }}
          >
            Buy
          </ToggleButton>
        </Box>
      </ToggleButtonGroup>
      <Box
        sx={{
          p: "12px",
          background: "rgba(255, 255, 255, 0.3)",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            padding: "16px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            width: "fit-content",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap", 
            gap: 2,
          }}
        >
          {selectedTab === "buy" && (
            <Box  sx={{
              display: "flex",
              flexWrap:{xs: "wrap", sm: "unset"},
              gap: 2,
              alignItems: "center",
              justifyContent: "center",
            }}>              
                <TextField
                  size="small"
                  label="Enter Keyword..."
                  variant="outlined"
                  fullWidth
                  sx={{ minWidth: "150px" }}
                />          
                <Autocomplete
                options={["Apartment", "Studio", "Shared"]}
                size="small"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Earliest Move Date"
                    variant="outlined"
                    sx={{ minWidth: "180px" }}
                  />
                )}
                fullWidth
              />
              <Autocomplete
                options={locations}
                size="small"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Latest Move Date"
                    variant="outlined"
                    sx={{ minWidth: "170px" }}
                  />
                )}
                fullWidth
              />
             <Autocomplete
                options={locations}
                size="small"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Min Beds"
                    variant="outlined"
                    // sx={{ minWidth: "150px" }}
                  />
                )}
                fullWidth
              />
             <Autocomplete
                options={locations}
                size="small"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Max Price"
                    variant="outlined"
                    // sx={{ minWidth: "150px" }}
                  />
                )}
                fullWidth
              />
            </Box>
          )}
          {selectedTab === "rent" && (
            <Box
              sx={{
                display: "flex",
                flexWrap:{xs: "wrap", sm: "unset"},
                gap: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                size="small"
                label="Enter Keyword..."
                variant="outlined"
                fullWidth
                sx={{ minWidth: "150px" }}
              />
              <Autocomplete
                options={["Apartment", "Studio", "Shared"]}
                size="small"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Earliest Move Date"
                    variant="outlined"
                    sx={{ minWidth: "180px" }}
                  />
                )}
                fullWidth
              />
              <Autocomplete
                options={locations}
                size="small"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Latest Move Date"
                    variant="outlined"
                    sx={{ minWidth: "170px" }}
                  />
                )}
                fullWidth
              />
             <Autocomplete
                options={locations}
                size="small"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Min Beds"
                    variant="outlined"
                    // sx={{ minWidth: "150px" }}
                  />
                )}
                fullWidth
              />
             <Autocomplete
                options={locations}
                size="small"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Max Price"
                    variant="outlined"
                    // sx={{ minWidth: "150px" }}
                  />
                )}
                fullWidth
              />
            </Box>
          )}

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#E0D8C3",
              "&:hover": {
                backgroundColor: "#4D4D4D",
                color: "#fff",
              },
              color: "#000",
              minWidth: "150px",
              // height: "55px",
            }}
          >
            Search
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertySearch;
