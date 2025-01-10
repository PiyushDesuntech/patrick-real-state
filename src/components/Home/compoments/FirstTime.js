import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function FirstTime() {
  return (
    <Container>
      <Box mt={4} mb={4}>
        <Grid container spacing={2}>
          <Grid item md={6} sm={6} xs={12}>
            <Box>
              <Typography
                sx={{ fontSize: "36px", fontWeight: 600, maxWidth: "400px" }}
              >
                Are You a First-Time Homebuyer?
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Typography variant="body2">
              Now to the home buying process or looking for a refresher? Check
              out our resource library designed specifically for new home
              buyers.
            </Typography>
            <Box sx={{display: "flex", flexWrap: "wrap", gap: 2, mt: 2}}>
                <Button variant="outlined" sx={{textTransform: "none"}}>Start Your Journey Here</Button>
                <Button variant="outlined" sx={{textTransform: "none"}}>Consult with our agent</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
