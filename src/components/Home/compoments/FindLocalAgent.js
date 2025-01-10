import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"; // Importing the search icon from MUI

export default function FindLocalAgent() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sm={6} xs={12}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              padding: "1rem",
            }}
          >
            <Image
              src="/images/LocalAgent.svg"
              alt="Colonial Realty Associates"
              layout="responsive"
              width={650}
              height={500}
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              m: 1,
              gap: 1,
            }}
          >
            <Typography variant="h4" sx={{ textAlign: "start" }}>
              Find Local Agent
            </Typography>
            <Typography variant="body2" sx={{ textAlign: "start" }}>
              You’re in luck! HouzQuest rigerously vets the best Realtors in
              your local market to help you find just the right fit.
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Search..."
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 4, // Adds a slight border-radius to the input field
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
