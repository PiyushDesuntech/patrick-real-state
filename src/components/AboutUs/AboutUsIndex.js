import React from "react";
import OurMission from "./components/OurMission";
import WhyUs from "@/components/Home/compoments/WhyUs";
import { Box } from "@mui/material";
import AboutHeading from "./components/AboutHeading";
import ClientTestimonials from "../Home/compoments/ClientTestimonials";
import OurAgents from "./components/OurAgents";
import HomeIndex from "../Home/HomeIndex";
import JoinUs from "../Home/compoments/JoinUs";

export default function AboutUsIndex() {
  return (
    <Box>
      <AboutHeading />
      <OurMission />
      <WhyUs />
      <OurAgents/>
      <ClientTestimonials/>
      <JoinUs/>
    </Box>
  )
}
