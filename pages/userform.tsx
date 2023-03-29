import React from "react";
import Form from "@/components/form/form";
import Container from "@mui/material/Container";

export default function UserForm() {
  return (
    <Container
      maxWidth={"md"}
      sx={{ p: 3 }}
    >
      <Form></Form>
    </Container>
  );
}
