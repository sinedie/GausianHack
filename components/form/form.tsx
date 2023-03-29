// import "./form.scss";
import { useState, useContext } from "react";
import { UserContext } from "../../context/user-context";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

export default function Form() {
  const [formFields, setFormFields] = useState({});
  const { setCurrentUser } = useContext(UserContext);
  const router = useRouter()

  function handleChange(e: any) {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    router.push('stories')
    setCurrentUser(formFields);
  }

  const {
    primerNombre,
    apellido,
    ingresosNetos,
    alimentacion,
    transporte,
    deuda,
    arriendo,
    servicios,
    ocio,
    otros,
  } = formFields;

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <Typography variant='h5'>Cual es tu presupuesto?</Typography>

        <Grid container spacing={2}>
          <Grid md item>
            <TextField
              fullWidth
              margin="normal"
              label="Nombres"
              type="text"
              onChange={handleChange}
              value={primerNombre}
              name="primerNombre"
            />
          </Grid>
          <Grid item md>
            <TextField
              fullWidth
              margin="normal"
              label="Apellidos"
              type="text"
              onChange={handleChange}
              value={apellido}
              name="apellido"
            />
          </Grid>
        </Grid>

        <Typography variant='h5'>Ingresos</Typography>

        <TextField
          fullWidth
          margin="normal"
          label="Ingresos Netos"
          type="text"
          onChange={handleChange}
          value={ingresosNetos}
          name="ingresosNetos"
        />

        <Typography variant='h5'>Gastos</Typography>

        <Grid container spacing={2}>
          <Grid md item>
            <TextField
              fullWidth
              margin="normal"
              label="Alimentacion"
              type="text"
              onChange={handleChange}
              value={alimentacion}
              name="alimentacion"
            />

            <TextField
              fullWidth
              margin="normal"
              label="Transporte"
              type="text"
              onChange={handleChange}
              value={transporte}
              name="Transporte"
            />

            <TextField
              fullWidth
              margin="normal"
              label="Deuda"
              type="text"
              onChange={handleChange}
              value={deuda}
              name="Deuda"
            />

            <TextField
              fullWidth
              margin="normal"
              label="Arriendo"
              type="text"
              onChange={handleChange}
              value={arriendo}
              name="Arriendo"
            />
          </Grid>

          <Grid md item>
            <TextField
              fullWidth
              margin="normal"
              label="Servicios"
              type="text"
              onChange={handleChange}
              value={servicios}
              name="Servicios"
            />

            <TextField
              fullWidth
              margin="normal"
              label="Ocio"
              type="text"
              onChange={handleChange}
              value={ocio}
              name="Ocio"
            />

            <TextField
              fullWidth
              margin="normal"
              label="Otros"
              type="text"
              onChange={handleChange}
              value={otros}
              name="Otros"
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          sx={{ mt: 3 }}
        >
          Enviar
        </Button>
      </form>
    </div>
  );
}
