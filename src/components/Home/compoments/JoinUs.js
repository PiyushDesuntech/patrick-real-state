import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function JoinUs() {
  return (
    <Box
      sx={{
        backgroundImage: "url(/images/Join.svg)",
        mt: 10,
      }}
    >
      <Container maxWidth="xl">
        <Grid container sx={{px: {md: 7}, py: 4}}>
          <Grid item sm={7} xs={12} sx={{ color: "#fff" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                py: 10,
                gap: 2
              }}
            >
              <Typography variant="h4" sx={{fontSize: "40px"}}>
                Join With Us & Have your Dream Home
              </Typography>
              <Typography variant="body2" sx={{fontSize: "16px"}}>
                Maecenas pharetra neque maximus nunc semper, in faucibus quam
                facilisis.
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={5} xs={12} sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                justifyContent: {xs: "center", md: "flex-end"},
                alignItems: "center",
                py: 9,
                flexWrap: "wrap"
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#E0D8C3",
                  "&:hover": {
                    backgroundColor: "#4D4D4D",
                    color: "#fff",
                  },
                  color: "#000",
                  minWidth: "233px",
                  height: "53px",
                  textTransform: "none",
                 
                }}
              >
                Contact With Us
              </Button>
              <Button
                 variant="contained"
                 sx={{
                  textTransform: "none",
                   backgroundColor: "#fff",
                   "&:hover": {
                     backgroundColor: "#4D4D4D",
                     color: "#fff",
                   },
                   color: "#000",
                   minWidth: "233px",
                   height: "53px",
                 }}
              >
                Know More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
