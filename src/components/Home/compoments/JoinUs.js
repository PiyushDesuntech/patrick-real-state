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
      <Container>
        <Grid container>
          <Grid item sm={7} xs={12} sx={{ color: "#fff" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                py: 8,
              }}
            >
              <Typography variant="h4">
                Join With Us & Have your Dream Home
              </Typography>
              <Typography variant="body2">
                Maecenas pharetra neque maximus nunc semper, in faucibus quam
                facilisis.
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={5} xs={12}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                alignItems: "center",
                py: 9,
                flexWrap: "wrap"
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#FEFEFE",
                  "&:hover": { backgroundColor: "#E8E1C4" },
                  color: "#000",
                  border: "2px solid black",
                  textTransform: "none",
                }}
              >
                Contact With Us
              </Button>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#FEFEFE",
                  "&:hover": { backgroundColor: "#E8E1C4" },
                  color: "#000",
                  border: "2px solid black",
                  textTransform: "none",
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
