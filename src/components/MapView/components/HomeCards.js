import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Box,
  Chip,
  IconButton,
} from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";

const HomeCards = ({ property, onCardClick }) => {
  return (
    <Box>
      <Card
        sx={{
          height: "100%",
          borderRadius: "12px",
          boxShadow: 4,
          display: "flex",
          flexDirection: "column",
        }}
        onClick={() => onCardClick(property.locationSrc)}
      >
        <Box
          sx={{
            height: { xs: "252px" },
            width: { xs: "100%" },
            backgroundImage: `url(${property.image})`,
            borderRadius: "12px 12px 0px 0px ",
            p: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Box>
            <Chip
              label="For Sale"
              sx={{
                bgcolor: "#3E4C66",
                color: "#fff",
                width: "fit-content",
                borderRadius: 1,
                fontSize: "14px",
                "&:hover": {bgcolor: "#E8E1C4",  color: "#4D4D4D",},
              }}
            />
          </Box>
        </Box>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%", // Makes the card content fill the available space
          }}
        >
          <Box sx={{display: "flex", justifyContent: "space-between"}}>
            <Typography
              variant="subtitle2"
              sx={{ color: "#B3A87A", fontSize: "11px" }}
            >
              {property.homeType}
            </Typography>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <IconButton
               sx={{
                borderRadius: "3px",
                color: "#4D4D4D",
                "&:hover": {
                  background: "#E0D8C3",
                  color: "#4D4D4D",
                },
                height: "20px",
              }}
              >
                <ReplyOutlinedIcon sx={{ transform: "scaleX(-1)", fontSize: "20px" }} />
              </IconButton>
                <IconButton
                  sx={{
                    borderRadius: "3px",
                    color: "#4D4D4D",
                    "&:hover": {
                      background: "#E0D8C3",
                      color: "#4D4D4D",
                    },
                    height: "20px",
                  }}
                >
                  <FavoriteBorderIcon sx={{fontSize: "20px"}} />
                </IconButton>
            </Box>
          </Box>
          <Typography
            variant="h6"
            sx={{ color: "#222222", fontSize: "17px", fontWeight: 700 }}
          >
            {property.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1,
              color: "#484848",
              fontSize: "11px",
            }}
          >
            <PlaceOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
            {property.address}
          </Typography>
          <Box sx={{ display: "flex", gap: 2, fontSize: "13px" }}>
            <Typography color="textSecondary">
              Beds: {property.beds} | Baths: {property.baths}
              {/* | Price: $
            {property.price} */}
            </Typography>
            {property.type === "For Rent" && (
              <Typography color="textSecondary">
                Available: {property.dateAvailable}
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HomeCards;
