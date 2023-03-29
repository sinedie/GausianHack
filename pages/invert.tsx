import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { PureComponent, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Inversiones from "@/components/inversiones/inversiones";

const data = [
  {
    name: "Feb 2022",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Mar 2022",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Abr 2022",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "May 2022",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Jun 2022",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jul 2022",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Ago 2022",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function invert() {
  const [showError, setShowError] = useState(false);
  const [showGood, setShowGood] = useState(false);

  const goodAnwser = () => {
    setShowGood(true);
    setShowError(false);
  };

  const badAnwser = () => {
    setShowError(true);
    setShowGood(false);
  };

  return (
    <Container
      maxWidth={"md"}
      sx={{ p: 3, display: "grid", placeItems: "center", height: "50vh" }}
    >
      <Typography variant="h5">
        Teniendo en cuenta la fluctuación del bitcoin en el anterior año y en el
        actual... ¿invertirías?
      </Typography>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 45,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

      <Grid container spacing={1}>
        <Grid item md={12}>
          <Grid container spacing={1}>
            <Grid item>
              <Button onClick={goodAnwser} variant="contained">
                Si
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={badAnwser} variant="contained">
                No
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={12}>
          {showGood && <Alert>Esa es la decisión correcta</Alert>}

          {showError && (
            <>
              <Alert severity="warning">
                Podrias haberlo hecho mejor. Tenemos la siguiente información
                que te puede ayudar
              </Alert>

              <Inversiones></Inversiones>
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
