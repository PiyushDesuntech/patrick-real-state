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
import SendIcon from "@mui/icons-material/Send";
import Image from "next/image";

const FooterIndex = () => {
  return (
    <Box sx={{mt: 4}}>
      <Box
      sx={{
        backgroundColor: "#394460",
        color: "white",
        py: 3,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* Logo and About */}
          <Grid item xs={12} sm={6} md={3}>
            <Image
              src="/images/logo.svg" // Replace with your logo path
              alt="Colonial Realty Associates"
              width={200} // Adjust width to your logo's dimensions
              height={100} // Adjust height to your logo's dimensions
            />
            <Typography variant="body2">
              Sed aliquet dui ut pellentesque semper. Nulla facilisi. Duis ac
              odio tortor. Nunc ullamcorper, justo a pretium finibus, lacus
              lectus dignissim lorem, nec congue nunc purus sed dolor.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Quick Links
            </Typography>
            <Typography
              variant="body2"
              component={Link}
              href="#"
              sx={{ display: "block", color: "inherit", mb: 1 }}
            >
              About Us
            </Typography>
            <Typography
              variant="body2"
              component={Link}
              href="#"
              sx={{ display: "block", color: "inherit", mb: 1 }}
            >
              Terms & Conditions
            </Typography>
            <Typography
              variant="body2"
              component={Link}
              href="#"
              sx={{ display: "block", color: "inherit", mb: 1 }}
            >
              User's Guide
            </Typography>
            <Typography
              variant="body2"
              component={Link}
              href="#"
              sx={{ display: "block", color: "inherit", mb: 1 }}
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
          </Grid>

          {/* Contact Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Contact Us
            </Typography>
            <Typography variant="body2">info@examplemail.com</Typography>
            <Typography variant="body2">
              Collins Street West, Victoria 9007, Australia
            </Typography>
            <Typography variant="body2">+123 456 789</Typography>
          </Grid>

          {/* Follow Us and Subscribe */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
              <IconButton sx={{ color: "white" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <XIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <PinterestIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <GoogleIcon />
              </IconButton>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
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
                  sx: { fontSize: "0.9rem", color: "#2C3E50", flex: 1 },
                }}
              />
              <IconButton>
                <SendIcon sx={{ color: "#2C3E50" }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Box sx={{background: "#323C52"}}>
      <Container>
      <Box
          sx={{
            pt: 3,
            // textAlign: "center",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            color: "white",
            py: 2,
          }}
        >
          <Box sx={{display: "flex", gap: {xs: 1, md : 3}, flexWrap: "wrap," }}>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Home
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Listing
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Property
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Pages
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Blog
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Contact
            </Typography>
          </Box>
          <Typography variant="body2">
            Copyright &copy; 2024 Colonial Realty. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
    </Box>
  );
};

export default FooterIndex;
