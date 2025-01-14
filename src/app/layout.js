"use client";
import { Lato } from "next/font/google";
import Box from "@mui/material/Box";
import "./globals.css";
import Script from "next/script";
import NavbarIndex from "@/components/Navbar/NavbarIndex";
import { useEffect, useState } from "react";
import FooterIndex from "@/components/Footer/FooterIndex";
import PropertyNavbar from "@/components/PropertyNavbar/PropertyNavbar";
import { usePathname } from "next/navigation";

// Load Inter font
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"], // Specify available weights
});

// export const metadata = {
//   title: "Merit Pathshala",
//   description: "Merit Pathshala",
// };

export default function RootLayout({ children }) {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname(); // Get the current route path

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html lang="en">
      <body className={lato.className}>
        {isMounted && pathname === "/" && <NavbarIndex />}
        {isMounted && pathname !== "/" && <PropertyNavbar />}
        <Box suppressHydrationWarning>{children}</Box>
        {isMounted && <FooterIndex />}
      </body>
    </html>
  );
}
