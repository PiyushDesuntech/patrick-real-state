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
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import Image from "next/image";

const NavbarIndex = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isLoginView, setIsLoginView] = useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check if the screen size is small or below

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
    "Home",
    "About Us",
    "Market Insight",
    "Relocation Services",
    "Student Resources",
    "Login/Register",
  ];

  return (
    <>
      {/* AppBar */}
      <AppBar position="static" sx={{ background: "transparent" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Image
            src="/images/logo.svg"
            alt="Colonial Realty Associates"
            width={200}
            height={100}
          />

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.slice(0, -1).map((item, index) => (
              <Button
                key={index}
                color="inherit"
                sx={{ textTransform: "none" }}
              >
                {item}
              </Button>
            ))}
            <Button
              color="inherit"
              onClick={handleDialogToggle}
              sx={{ textTransform: "none" }}
            >
              <AccountCircleIcon sx={{ mr: 1 }} />
              Login/Register
            </Button>
          </Box>

          {/* Become an Agent Button */}
          <Button
            variant="contained"
            color="secondary"
            sx={{
              display: { xs: "none", md: "flex" },
              backgroundColor: "#E0D8C3",
              color: "#000",
              borderRadius: "30px",
              textTransform: "none",
              pr: {xs: 2, sm: 2, md: 2, lg: 4},
              pl: {xs: 2, sm: 2, md: 2, lg: 4},
            }}
          >
            Become an Agent
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
            {navItems.slice(0, -1).map((text, index) => (
              <ListItem button key={index}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
            {/* Login/Register Button */}
            <ListItem
              button
              onClick={(e) => {
                e.stopPropagation(); // Prevent Drawer onClose from triggering
                handleDialogToggle(); // Open the dialog
                setDrawerOpen(false); // Close the drawer
              }}
            >
              <ListItemText primary="Login/Register" />
            </ListItem>
          </List>
          <Divider />
          <Button
            variant="contained"
            color="secondary"
            sx={{
              backgroundColor: "#E0D8C3",
              color: "#000",
              borderRadius: "30px",
              textTransform: "none",
              pr: 4,
              pl: 4,
            }}
          >
            Become an Agent
          </Button>
        </Box>
      </Drawer>

      {/* Login/Register Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={handleDialogToggle}
        maxWidth="md"
        fullWidth
        fullScreen={isMobile} // Make the dialog fullscreen on mobile
      >
        <DialogContent>
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={handleDialogToggle}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            display="flex"
            flexDirection={isMobile ? "column" : "row"} // Stack content on mobile
          >
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

export default NavbarIndex;
