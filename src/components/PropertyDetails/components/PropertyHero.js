"use client"
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import WestIcon from "@mui/icons-material/West";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { useRouter } from "next/navigation";

export default function PropertyHero() {
  const router = useRouter();
  return (
    <Box
      sx={{
        backgroundImage: "url(/images/PropertyDetailsBG.svg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "500px",
        width: "100%",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { lg: 7, xs: 1 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "450px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
            <Button
              onClick={() => router.back()}
              startIcon={<WestIcon sx={{ fontSize: "30px" }} />}
              variant="contained"
              sx={{
                backgroundColor: "#E0D8C3",
                "&:hover": {
                  backgroundColor: "#4D4D4D",
                  color: "#fff",
                },
                color: "#000",
                minWidth: "233px",
                height: "53px",
                textTransform: "none",
              }}
            >
              Back To Search
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                sx={{ fontSize: "37px", fontWeight: 600, color: "#fff" }}
              >
                Diamond Manor Apartment
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1,
                  color: "#fff",
                }}
              >
                <PlaceOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
                22-05 Astoria Blvd, Astoria
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Typography
                sx={{ fontSize: "37px", color: "#fff", fontWeight: 600 }}
              >
                $6500
              </Typography>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <IconButton
                  sx={{
                    borderRadius: "3px",
                    background: "#E8E1C4",
                    color: "#767676",
                    height: "43px",
                    "&:hover": {
                      background: "#fff",
                      color: "#4D4D4D",
                    },
                  }}
                >
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton
                  sx={{
                    borderRadius: "3px",
                    background: "#E8E1C4",
                    color: "#767676",
                    height: "43px",
                    "&:hover": {
                      background: "#fff",
                      color: "#4D4D4D",
                    },
                  }}
                >
                  <SyncAltOutlinedIcon />
                </IconButton>
                <IconButton
                  sx={{
                    borderRadius: "3px",
                    background: "#E8E1C4",
                    color: "#767676",
                    height: "43px",
                    "&:hover": {
                      background: "#fff",
                      color: "#4D4D4D",
                    },
                  }}
                >
                  <ReplyOutlinedIcon sx={{ transform: "scaleX(-1)" }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
