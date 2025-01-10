"use client"
import { Inter } from "next/font/google";
import Box from "@mui/material/Box";
import "./globals.css";
import Script from "next/script";
import NavbarIndex from "@/components/Navbar/NavbarIndex";
import { useEffect, useState } from "react";
import FooterIndex from "@/components/Footer/FooterIndex";

// Load Inter font
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Merit Pathshala",
//   description: "Merit Pathshala",
// };

export default function RootLayout({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {isMounted && <NavbarIndex />}
        <Box suppressHydrationWarning>{children}</Box>
        {isMounted && <FooterIndex/>}
      </body>
    </html>
  );
}
