import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Courses from "./courses/courses";
import StyledPaper from "./StyledPaper";

interface StoryCase {
  text: string;
  question: string;
  anwsers: string[];
  rightAnwser: string;
}

export default function Story({ story }: { story: StoryCase[] }) {
  const [storyNumber, setStoryNumber] = useState(0);
  const [showError, setShowError] = useState(false);
  const [showGood, setShowGood] = useState(false);

  const showNextPart = (awnser: string) => {
    if (awnser === story[storyNumber].rightAnwser) {
      setShowGood(true);
      setShowError(false);
    } else {
      setShowError(true);
      setShowGood(false);
    }

    if (story[storyNumber + 1]) {
      setStoryNumber(storyNumber + 1);
    }
  };

  return (
    <>
      <StyledPaper>
        <>
          <Typography variant="h5"> {story[storyNumber]?.text}</Typography>
        </>
      </StyledPaper>

      <Grid container spacing={1}>
        <Grid item md={12} sx={{ mt: 5 }}>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            {story[storyNumber]?.question}
          </Typography>
        </Grid>

        {story[storyNumber]?.anwsers.map((anwser, i) => (
          <Grid item key={i}>
            <Button onClick={() => showNextPart(anwser)} variant="contained">
              {anwser}
            </Button>
          </Grid>
        ))}

        <Grid item md={12}>
          {showGood && <Alert>Esa es la decisión correcta</Alert>}

          {showError && (
            <>
              <Alert severity="warning">
                Podrias haberlo hecho mejor. Tenemos la siguiente información
                que te puede ayudar
              </Alert>

              <Courses></Courses>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
}
