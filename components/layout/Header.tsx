import Box from "@mui/material/Box";
import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";

export default function Header() {
  return (
    <Box
      sx={{
        positon: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        width: "100vw",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <Logo />
      <Navbar />
    </Box>
  );
}
