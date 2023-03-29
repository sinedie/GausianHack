import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import React from "react";

export default function Logo() {
  const router = useRouter();
  return (
    <Box sx={{ userSelect: "none", cursor: "pointer" }}>
      <img
        src="Finer.png"
        alt="Finer logo"
        width={100}
        onClick={() => router.push("/")}
      />
    </Box>
  );
}
