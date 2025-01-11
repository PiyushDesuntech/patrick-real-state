import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  IconButton,
  Link,
  Container,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TwitterIcon from "@mui/icons-material/Twitter";
import NorthIcon from '@mui/icons-material/North';
import Image from "next/image";

const FooterIndex = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#394460",
          color: "white",
          py: 2,
        }}
      >
        <Container maxWidth="xl" sx={{ px: { lg: 8 }, pb: 6 }}>
          <Grid container spacing={4}>
            {/* Logo and About */}
            <Grid item xs={12} sm={6} md={3.5}>
              <Box sx={{ py: { md: 3 } }}>
                <Image
                  src="/images/logo.svg"
                  alt="Colonial Realty Associates"
                  width={200}
                  height={100}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "medium",
                    lineHeight: "26px",
                  }}
                >
                  Sed aliquet dui ut pellentesque semper. Nulla facilisi. Duis
                  ac odio tortor. Nunc ullamcorper, justo a pretium finibus,
                  lacus lectus dignissim lorem, nec congue nunc purus sed dolor.
                </Typography>
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={2.5}>
              <Box
                sx={{
                  px: { md: 7 },
                  mt: 5,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "500", mb: 4, fontSize: "22px" }}
                >
                  Quick Links
                </Typography>
                <Typography
                  variant="body2"
                  component={Link}
                  href="#"
                  sx={{
                    display: "block",
                    color: "inherit",
                    mb: 2,
                    fontSize: "16px",
                    fontWeight: "medium",
                  }}
                >
                  About Us
                </Typography>
                <Typography
                  variant="body2"
                  component={Link}
                  href="#"
                  sx={{
                    display: "block",
                    color: "inherit",
                    mb: 2,
                    fontSize: "16px",
                    fontWeight: "medium",
                  }}
                >
                  Terms & Conditions
                </Typography>
                <Typography
                  variant="body2"
                  component={Link}
                  href="#"
                  sx={{
                    display: "block",
                    color: "inherit",
                    mb: 2,
                    fontSize: "16px",
                    fontWeight: "medium",
                  }}
                >
                  User's Guide
                </Typography>
                <Typography
                  variant="body2"
                  component={Link}
                  href="#"
                  sx={{
                    display: "block",
                    color: "inherit",
                    mb: 2,
                    fontSize: "16px",
                    fontWeight: "medium",
                  }}
                >
                  Support Center
                </Typography>
                <Typography
                  variant="body2"
                  component={Link}
                  href="#"
                  sx={{ display: "block", color: "inherit" }}
                >
                  Press Info
                </Typography>
              </Box>
            </Grid>

            {/* Contact Us */}
            <Grid item xs={12} sm={6} md={2.5}>
              <Box
                sx={{
                  //  px: {md: 7},
                  mt: 5,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "500", mb: 4, fontSize: "22px" }}
                >
                  Contact Us
                </Typography>
                <Typography sx={{ fontSize: "16px", mb: 2, fontWeight: "400" }}>
                  info@examplemail.com
                </Typography>
                <Typography sx={{ fontSize: "16px", mb: 2, fontWeight: "300" }}>
                  Collins Street West, Victoria 9007, Australia
                </Typography>
                <Typography variant="body2">+123 456 789</Typography>
              </Box>
            </Grid>

            {/* Follow Us and Subscribe */}
            <Grid item xs={12} sm={6} md={3.5}>
              <Box
                sx={{
                  px: { md: 4 },
                  mt: 5,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "500", mb: 2, fontSize: "22px" }}
                >
                  Follow Us
                </Typography>
                <Box sx={{ display: "flex", gap: 0.5, mb: 3, flexWrap: "wrap" }}>
                  <IconButton sx={{ color: "white" }}>
                    <FacebookIcon sx={{ fontSize: "32px" }} />
                  </IconButton>
                  <IconButton sx={{ color: "white" }}>
                    <XIcon sx={{ fontSize: "32px" }} />
                  </IconButton>
                  <IconButton sx={{ color: "white" }}>
                    <TwitterIcon sx={{ fontSize: "32px" }} />
                  </IconButton>
                  <IconButton sx={{ color: "white" }}>
                    <InstagramIcon sx={{ fontSize: "32px" }} />
                  </IconButton>
                  <IconButton sx={{ color: "white" }}>
                    <PinterestIcon sx={{ fontSize: "32px" }} />
                  </IconButton>
                  <IconButton sx={{ color: "white" }}>
                    <GoogleIcon sx={{ fontSize: "32px" }} />
                  </IconButton>
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "500", mb: 2, fontSize: "22px" }}
                >
                  Subscribe
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "white",
                    borderRadius: "30px",
                    padding: "2px 10px",
                    justifyContent: "space-between",
                  }}
                >
                  <TextField
                    variant="standard"
                    placeholder="Your Email"
                    InputProps={{
                      disableUnderline: true,
                      sx: {
                        fontSize: "0.9rem",
                        color: "#2C3E50",
                        flex: 1,
                        ml: 1,
                      },
                    }}
                  />
                  <IconButton
                    variant="contained"
                    sx={{
                      backgroundColor: "#E0D8C3",
                      "&:hover": {
                        backgroundColor: "#4D4D4D",
                        color: "#fff",
                      },
                      color: "#2C3E50",
                      minWidth: "50px",
                      height: "50px",
                      mr: -1,
                    }}
                  >
                    <ArrowForwardIosIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ background: "#323C52" }}>
        <Container maxWidth="xl" sx={{ px: { lg: 8 } }}>
          <Box
            sx={{
              pt: 5,
              // textAlign: "center",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              color: "white",
              // py: 3,
              pb: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: { xs: 1, md: "49px" },
                flexWrap: "wrap,",
              }}
            >
              <Typography variant="body2" sx={{ mb: 2, fontSize: {xs: "14px", sm: "16px"} }}>
                Home
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, fontSize: {xs: "14px", sm: "16px"} }}>
                Listing
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, fontSize: {xs: "14px", sm: "16px"} }}>
                Property
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, fontSize: {xs: "14px", sm: "16px"} }}>
                Pages
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, fontSize: {xs: "14px", sm: "16px"} }}>
                Blog
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, fontSize: {xs: "14px", sm: "16px"} }}>
                Contact
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center", mt: -2 }}>
              <Typography variant="body2">
                Copyright &copy; 2024 Colonial Realty. All rights reserved.
              </Typography>
              <IconButton
                variant="contained"
                sx={{
                  backgroundColor: "#E0D8C3",
                  "&:hover": {
                    backgroundColor: "#4D4D4D",
                    color: "#fff",
                  },
                  color: "#2C3E50",
                  minWidth: "50px",
                  height: "50px",
                  mr: -1,
                }}
              >
                <NorthIcon />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default FooterIndex;
