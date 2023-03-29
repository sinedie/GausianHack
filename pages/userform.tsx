import React from "react";
import Form from "@/components/form/form";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function UserForm() {
  return (
    <Container maxWidth={"md"} sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Cuentanos quien eres
      </Typography>

      <Form />
    </Container>
  );
}
