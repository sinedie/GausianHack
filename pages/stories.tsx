import Story from "@/components/Story";
import Container from "@mui/material/Container";
import React from "react";

export default function StoriesPage() {
  return (
    <Container
      maxWidth={"md"}
      sx={{ p: 3, display: "grid", placeItems: "center", height: "50vh" }}
    >
      <Story
        story={[
          {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            question: "Quesiton 1",
            anwsers: ["Si", "No"],
            rightAnwser: "Si",
          },
          {
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            question: "Quesiton 2",
            anwsers: ["Si", "No"],
            rightAnwser: "No",
          },
          {
            text: " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            question: "Quesiton1",
            anwsers: ["Si", "No"],
            rightAnwser: "Si",
          },
        ]}
      />
    </Container>
  );
}
