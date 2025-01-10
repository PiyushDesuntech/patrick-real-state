"use client"
import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup, Box, TextField, Button, Autocomplete, Grid } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const PropertySearch = () => {
  const [selectedTab, setSelectedTab] = useState('buy');

  const handleTabChange = (event, newTab) => {
    if (newTab !== null) {
      setSelectedTab(newTab);
    }
  };

  // Sample options for Autocomplete fields
  const propertyTypes = ['House', 'Apartment', 'Studio', 'Villa'];
  const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
  const priceRange = ['1000-2000', '2000-5000'];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, p: {xs: 2} }}>
      {/* Tabs */}
      <ToggleButtonGroup
        value={selectedTab}
        exclusive
        onChange={handleTabChange}
        sx={{
            display: "flex",
            gap: 3,
        }}
        
      >
        <Box sx={{
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        }}>
        <ToggleButton
          value="buy"
          sx={{
            textTransform: 'none',
            fontWeight: selectedTab === 'buy' ? 'bold' : 'normal',
            padding: '8px 16px',
          }}
        >
          Buy
        </ToggleButton>
        </Box>
        <Box sx={{
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        }}>
        <ToggleButton
          value="rent"
          sx={{
            textTransform: 'none',
            fontWeight: selectedTab === 'rent' ? 'bold' : 'normal',
            padding: '8px 16px',
          }}
        >
          Rent
        </ToggleButton>
        </Box>
      </ToggleButtonGroup>

      {/* Dynamic Content Based on Selected Tab */}
      <Box
        sx={{
          backgroundColor: 'white',
          padding: '16px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          width: '100%',
          display: "flex", justifyContent: "center",
        }}
      >
        <Grid container spacing={2} alignItems="center">
          {selectedTab === 'buy' && (
            <>
              <Grid item xs={12} sm={6} md={2}>
                <TextField
                  label="Enter Keyword..."
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ minWidth: '150px' }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Autocomplete
                  options={propertyTypes}
                  renderInput={(params) => (
                    <TextField {...params} label="Property Type" variant="outlined" size="small" sx={{ minWidth: '150px' }} />
                  )}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Autocomplete
                  options={locations}
                  renderInput={(params) => (
                    <TextField {...params} label="Location" variant="outlined" size="small" sx={{ minWidth: '150px' }} />
                  )}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Autocomplete
                  options={priceRange}
                  renderInput={(params) => (
                    <TextField {...params} label="Price Range" variant="outlined" size="small" sx={{ minWidth: '150px' }} />
                  )}
                  fullWidth
                />
              </Grid>
            </>
          )}
          {selectedTab === 'rent' && (
            <>
              <Grid item xs={12} sm={6} md={2}>
                <TextField
                  label="Enter Keyword..."
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ minWidth: '150px' }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Autocomplete
                  options={['Apartment', 'Studio', 'Shared']}
                  renderInput={(params) => (
                    <TextField {...params} label="Rental Type" variant="outlined" size="small" sx={{ minWidth: '150px' }} />
                  )}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Autocomplete
                  options={locations}
                  renderInput={(params) => (
                    <TextField {...params} label="City" variant="outlined" size="small" sx={{ minWidth: '150px' }} />
                  )}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <TextField
                  label="Budget"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ minWidth: '150px' }}
                />
              </Grid>
            </>
          )}

          <Grid item xs={12} sm="auto">
            <Button sx={{ textTransform: "none",minWidth: '150px' }} endIcon={<MoreVertIcon />}>
              Advanced
            </Button>
          </Grid>
          <Grid item xs={12} sm="auto">
            <Button variant="contained" sx={{ backgroundColor: '#c2b280', color: 'white', minWidth: '150px' }}>
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PropertySearch;
