import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

export default function RecentBlog() {
  return (
    <Box
      sx={{
        backgroundImage: "url(/images/Join.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        mt: 8
      }}
    >
      <Container maxWidth="xl" sx={{px: {md: 8}, pb: 5}}>
        <Grid container>
          <Grid item md={7} xs={12} sx={{ color: "#fff" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                py: { xs: 2, md: 3 },
              }}
            >
              <Typography variant="h4" sx={{fontSize: "25px"}}>Recent Blog </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Box
                  sx={{
                    height: "150px",
                    // width: "100%",
                    overflow: "hidden",
                    mt: 2,
                  }}
                >
                  <Image
                    src="/images/RecentBlog.svg"
                    alt="Colonial Realty Associates"
                    layout="intrinsic"
                    width={250}
                    height={100}
                    style={{
                      objectFit: "contain",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{fontSize: "23px"}}>
                    My Two Cents: How Tax Changes will Affect - Home Buying in
                    2019
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 2,
                    }}
                  >
                    <Typography sx={{fontSize: "16px"}}>05/17/2019</Typography>
                    <Button
                      endIcon={<EastIcon sx={{ color: "#fff" }} />}
                      sx={{ color: "#fff", textTransform: "none", fontSize: "16px" }}
                    >
                      Read More
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={5} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                // alignItems: "center",
                py: { xs: 2, md: 3 },
                px: 2,
                color: "#fff",
                gap: 3,
              }}
            >
              <Typography variant="h4" sx={{ textAlign: "start" }}>
                Never miss an opportunity.
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "start" }}>
                Subscribeto our newsletter for all updates.
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Enter Your Email Address"
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
                          minWidth: "150px",
                          height: "55px",
                          mr: -1.7,
                          borderRadius: "0px 4px 4px 0px",
                        }}
                      >
                        Subscribe
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
