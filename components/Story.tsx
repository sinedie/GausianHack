import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import StyledPaper from "./StyledPaper";

interface StoryCase {
  text: string;
  question: string;
  anwsers: string[];
}

export default function Story({ story }: { story: StoryCase[] }) {
  const [storyNumber, setStoryNumber] = useState(0);

  const showNextPart = () => {
    if (story[storyNumber + 1]) {
      setStoryNumber(storyNumber + 1);
    }
  };

  return (
    <StyledPaper>
      <>
        <Typography variant="h5"> {story[storyNumber]?.text}</Typography>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          {" "}
          {story[storyNumber]?.question}
        </Typography>

        <Grid container spacing={1}>
          {story[storyNumber]?.anwsers.map((anwser, i) => (
            <Grid item key={i}>
              <Button onClick={showNextPart} variant="contained">
                {anwser}
              </Button>
            </Grid>
          ))}
        </Grid>
      </>
    </StyledPaper>
  );
}
