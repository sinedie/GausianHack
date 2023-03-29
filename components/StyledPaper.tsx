import Paper from "@mui/material/Paper";
import React from "react";

export default function StyledPaper({ children }: { children: JSX.Element }) {
  return (
    <Paper sx={{ width: "100%", p: 3, mb: 3 }} elevation={4}>
      {children}
    </Paper>
  );
}
