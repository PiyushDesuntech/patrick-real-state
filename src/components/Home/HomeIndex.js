import { Box, Typography } from '@mui/material'
import React from 'react'
import Hero from './compoments/Hero'
import FirstTime from './compoments/FirstTime'
import FeatureProperties from './compoments/FeatureProperties'
import FindLocalAgent from './compoments/FindLocalAgent'
import LookingFor from './compoments/LookingFor'
import JoinUs from './compoments/JoinUs'
import WhyUs from './compoments/WhyUs'
import ClientStories from './compoments/ClientStories'
import RecentBlog from './compoments/RecentBlog'
import WantCall from './compoments/WantCall'

export default function HomeIndex() {
  return (
    <Box>
     <Hero/>
     <FirstTime/>
     <FeatureProperties/>
     <FindLocalAgent/>
     <LookingFor/>
     <JoinUs/>
     <WhyUs/>
     <ClientStories/>
     <RecentBlog/>
     <WantCall/>
    </Box>
  )
}
