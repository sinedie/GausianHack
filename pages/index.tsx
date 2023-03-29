import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import StyledPaper from "@/components/StyledPaper";
import { useRouter } from "next/router";

function HomeMessage({ onSubmit }: { onSubmit: (msg: string) => void }) {
  const [message, setMessage] = useState<string | null>(null);

  const onYesClick = () => setMessage("Ahora queremos saber tu historia");
  const onNoClick = () =>
    setMessage("Aun asi, Quedate con nosotros para mejorar tus finanzas");

  useEffect(() => {
    if (message) {
      onSubmit(message);
    }
  }, [message]);

  return (
    <>
      <Grid item md={12}>
        <StyledPaper>
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </>
        </StyledPaper>
      </Grid>

      <Grid item md={12} sx={{ mt: 4 }}>
        <Typography variant="h4" textAlign={"center"}>
          ¿Has vivido algo similar?
        </Typography>
      </Grid>

      <Grid item md={12} sx={{ textAlign: "center" }}>
        <Grid container spacing={2}>
          <Grid item md>
            <Button
              fullWidth
              variant="contained"
              onClick={onYesClick}
              size="large"
            >
              Si
            </Button>
          </Grid>
          <Grid item md>
            <Button
              fullWidth
              variant="contained"
              onClick={onNoClick}
              size="large"
            >
              No
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default function Home() {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);

  const start = () => {
    router.push("userform");
  };

  return (
    <Container
      maxWidth={"md"}
      sx={{ p: 3, display: "grid", placeItems: "center", height: "60vh" }}
    >
      <Grid container spacing={1}>
        {!message ? (
          <HomeMessage onSubmit={setMessage} />
        ) : (
          <>
            <Grid item md={12}>
              <Typography variant="h4" sx={{ textAlign: "center" }}>
                {message}
              </Typography>
            </Grid>

            <Grid item md sx={{ textAlign: "center" }}>
              <Button variant="contained" onClick={start} size="large">
                Comenzar
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
}
