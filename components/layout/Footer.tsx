import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <Box sx={{ position: "fixed", bottom: 0, right: 0, p: 1 }}>
      <InstagramIcon />
      <FacebookIcon />
      <TwitterIcon />
    </Box>
  );
}
