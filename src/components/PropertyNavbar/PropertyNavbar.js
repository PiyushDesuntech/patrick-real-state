"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Dialog,
  DialogContent,
  TextField,
  Checkbox,
  FormControlLabel,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CloseIcon from "@mui/icons-material/Close";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import Image from "next/image";

const PropertyNavbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isLoginView, setIsLoginView] = useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleDialogToggle = () => {
    setDialogOpen(!dialogOpen);
  };

  const switchView = () => {
    setIsLoginView(!isLoginView);
  };

  const navItems = [
    "Rent",
    "Buy",
    "Sell",
    "Students",
    "Market Insight",
    "Resources",
    "About",
    "Landlords",
  ];

  return (
    <>
      <AppBar position="static" sx={{ background: "#fff", color: "#000" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: { md: 4 },
            pt: 2,
            zIndex: 1100,
          }}
        >
          <Image
            src="/images/logo2.svg"
            alt="Colonial Realty Associates"
            width={269}
            height={66}
          />
          <Box sx={{display: "flex"}}>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: { md: 0, lg: 0 },
              }}
            >
              {navItems.slice(0, -1).map((item, index) => (
                <Button
                  key={index}
                  color="inherit"
                  sx={{ textTransform: "none", fontSize: "16px" }}
                >
                  {item}
                </Button>
              ))}
              <Button color="inherit" sx={{ textTransform: "none" }}>
                <PersonOutlineOutlinedIcon sx={{ mr: 1 }} />
                Landlords
              </Button>
            </Box>

            <Button
              variant="contained"
              onClick={handleDialogToggle}
              color="secondary"
              sx={{
                display: { xs: "none", md: "flex" },
                backgroundColor: "#E0D8C3",
                "&:hover": {
                  backgroundColor: "#4D4D4D",
                  color: "#fff",
                },
                color: "#000",
                borderRadius: "30px",
                textTransform: "none",
                px: { xs: 2, sm: 2, md: 2, lg: "40px" },
                py: "10px",
                // mr: 3,
                width: "fit-content",
                whiteSpace: "nowrap",
              }}
            >
              Login/Register
            </Button>

            {/* Mobile Menu Icon */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((text, index) => (
              <ListItem key={index}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDialogToggle}
            sx={{
              display: "flex",
              backgroundColor: "#E0D8C3",
              "&:hover": {
                backgroundColor: "#4D4D4D",
                color: "#fff",
              },
              color: "#000",
              borderRadius: "30px",
              textTransform: "none",
              px: { xs: 2, sm: 2, md: 5, lg: "40px" },
              py: "10px",
              m: 2,
            }}
          >
            Login/Register
          </Button>
        </Box>
      </Drawer>

      {/* Login/Register Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={handleDialogToggle}
        maxWidth="md"
        fullWidth
        fullScreen={isMobile}
      >
        <DialogContent>
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={handleDialogToggle}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box display="flex" flexDirection={isMobile ? "column" : "row"}>
            <Box
              style={{
                display: isMobile ? "none" : "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
                padding: "1rem",
              }}
            >
              <Image
                src="/images/LogIn.svg"
                alt="Colonial Realty Associates"
                layout="responsive"
                width={200}
                height={300}
                style={{ objectFit: "contain" }}
              />
            </Box>
            <Box flex={1} p={3}>
              <Typography variant="h5" gutterBottom>
                {isLoginView ? "Login" : "Register"}
              </Typography>
              {isLoginView ? (
                <>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<FacebookIcon />}
                  >
                    Login with Facebook
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                    sx={{ mt: 1 }}
                  >
                    Login with Google
                  </Button>
                  <Typography textAlign="center" my={2}>
                    Or
                  </Typography>
                  <TextField
                    fullWidth
                    label="Enter username or email"
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Enter Password"
                    type="password"
                    margin="normal"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="I agree to Terms & Conditions"
                  />
                  <Button fullWidth variant="contained" sx={{ mt: 2 }}>
                    Login
                  </Button>
                  <Typography mt={2} textAlign="center">
                    Don't you have an account?{" "}
                    <Link onClick={switchView} sx={{ cursor: "pointer" }}>
                      Register
                    </Link>
                  </Typography>
                </>
              ) : (
                <>
                  <TextField fullWidth label="Name" margin="normal" />
                  <TextField fullWidth label="Email" margin="normal" />
                  <TextField
                    fullWidth
                    label="Enter Password"
                    type="password"
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Re-enter Password"
                    type="password"
                    margin="normal"
                  />
                  <Button fullWidth variant="contained" sx={{ mt: 2 }}>
                    Register
                  </Button>
                  <Typography mt={2} textAlign="center">
                    Already have an account?{" "}
                    <Link onClick={switchView} sx={{ cursor: "pointer" }}>
                      Login
                    </Link>
                  </Typography>
                </>
              )}
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PropertyNavbar;
