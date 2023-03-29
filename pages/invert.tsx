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

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
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
      

      <Typography variant="h5">Teniendo en cuenta la fluctuacion del bitcoin en el anterior anio y en el actual... harias una inversion?</Typography>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
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
        <Button onClick={goodAnwser} variant="contained">
          Si
        </Button>
        <Button onClick={badAnwser} variant="contained">
          No
        </Button>

        <Grid item md={12}>
          {showGood && <Alert>Esa es la desicion correcta</Alert>}

          {showError && (
            <Alert severity="warning">
              Podrias haberlo hecho mejor. Tenemos la siguiente informacion que
              te puede ayudar
            </Alert>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
