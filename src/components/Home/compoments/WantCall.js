import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

export default function WantCall() {
  return (
    <Box
      sx={{
        backgroundImage: "url(/images/WantCallBG.svg)", // Path to your image
        backgroundSize: "cover", // Ensures the image covers the entire area
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
        backgroundPosition: "center", // Centers the image
        height: "100%", // Adjust height as needed
        width: "100%", // Adjust width as needed
        mt: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center,",
        flexDirection: "column",
      }}
    >
      <Container maxWidth="xl" sx={{px: {lg: "94px"}, py: 4}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
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
                    src="/images/WantCall1.svg"
                    alt="Colonial Realty Associates"
                    layout="responsive"
                    width={650}
                    height={500}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    padding: "1rem",
                    flexDirection: "column",
                  }}
                >
                  <Image
                    src="/images/WantCall2.svg"
                    alt="Colonial Realty Associates"
                    layout="responsive"
                    width={650}
                    height={500}
                    style={{ objectFit: "contain" }}
                  />
                  <Image
                    src="/images/WantCall3.svg"
                    alt="Colonial Realty Associates"
                    layout="responsive"
                    width={650}
                    height={500}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // alignItems: "center",
                py: { xs: 2, md: 15 },
                px: 2,
                gap: 3,
                width: {md: "500px"}
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  textAlign: "start",
                  fontWeight: "bold",
                  fontSize: "40px",
                }}
              >
                Request a Call Back from One of Our Agents
              </Typography>
              <Typography
                variant="body1"
                sx={{ textAlign: "start", fontSize: "16px" }}
              >
                Real people, Real answers. Real quick. Let one of our Client
                Conciergeshelp you get started on your home search. Enter your
                phone number and we’ll call you within 30 seconds.
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Enter Your Phone Number"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#E0D8C3",
                          "&:hover": {
                            backgroundColor: "#4D4D4D",
                            color: "#fff",
                          },
                          color: "#000",
                          minWidth: "118px",
                          height: "55px",
                          mr: -1.7,
                          borderRadius: "0px 4px 4px 0px",
                          boxShadow: "none"
                        }}
                      >
                        Call Back
                      </Button>
                    </InputAdornment>
                  ),
                  style: {
                    backgroundColor: "#fff",
                    borderRadius: "4px",
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
