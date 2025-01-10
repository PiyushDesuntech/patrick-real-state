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
      }}
    >
      <Container>
        <Grid container>
          <Grid item md={7} xs={12} sx={{ color: "#fff" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                py: { xs: 2, md: 6 },
              }}
            >
              <Typography variant="h4">Recent Blog </Typography>
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
                  <Typography>
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
                    <Typography>05/17/2019</Typography>
                    <Button
                      endIcon={<EastIcon sx={{ color: "#fff" }} />}
                      sx={{ color: "#fff", textTransform: "none" }}
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
                justifyContent: "center",
                // alignItems: "center",
                py: { xs: 2, md: 10 },
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
                        style={{
                          backgroundColor: "#d9c79b",
                          color: "#fff",
                          height: "100%",
                          textTransform: "none",
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
