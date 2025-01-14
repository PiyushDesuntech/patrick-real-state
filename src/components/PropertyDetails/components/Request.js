import React from "react";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";

function Request() {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        // maxWidth: 400,
        margin: "auto",
        padding: 4,
        borderRadius: "8px",
        border: "2px solid #EBEBEB",
      }}
    >
      <Typography variant="h6" component="div" gutterBottom>
        Request More Information
      </Typography>
      <TextField
        label="Name"
        required
        variant="outlined"
        fullWidth
        sx={{borderRadius: "8px"}}
      />
      <TextField
        label="E-mail"
        required
        variant="outlined"
        type="email"
        fullWidth
        sx={{borderRadius: "8px"}}
      />
      <TextField
        label="Phone"
        variant="outlined"
        type="tel"
        fullWidth
        sx={{borderRadius: "8px"}}
      />
      <TextField
        label="Message"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        sx={{borderRadius: "8px"}}
      />
      <FormControlLabel control={<Checkbox />} label="I'm not a robot" />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 2,
          bgcolor: "#E8E1C4",
          color: "#484848",
          boxShadow: "none",
          py:2,
          "&:hover": { bgcolor: "#fff", color: "#484848", boxShadow: "none", },
          fontSize: "20px",
          textTransform: "none",
          borderRadius: "8px"
        }}
      >
        Send Message
      </Button>
    </Box>
  );
}

export default Request;
