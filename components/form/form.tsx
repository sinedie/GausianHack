// import "./form.scss";
import { useState, useContext } from "react";
import { UserContext } from "../../context/user-context";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function Form() {
  const [formFields, setFormFields] = useState({});
  const { setCurrentUser } = useContext(UserContext);

  function handleChange(e: any) {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
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
        <h2>Cual es tu presupuesto?</h2>

        <Grid container spacing={2}>
          <Grid md item>
            <TextField
              fullWidth
              margin="normal"
              label="Nombres"
              type="text"
              required
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
              required
              onChange={handleChange}
              value={apellido}
              name="apellido"
            />
          </Grid>
        </Grid>

        <h2>Ingresos</h2>

        <TextField
          fullWidth
          margin="normal"
          label="Ingresos Netos"
          type="text"
          required
          onChange={handleChange}
          value={ingresosNetos}
          name="ingresosNetos"
        />

        <h2>Gastos</h2>

        <TextField
          fullWidth
          margin="normal"
          label="Alimentacion"
          type="text"
          required
          onChange={handleChange}
          value={alimentacion}
          name="alimentacion"
        />

        <TextField
          fullWidth
          margin="normal"
          label="Transporte"
          type="text"
          required
          onChange={handleChange}
          value={transporte}
          name="Transporte"
        />

        <TextField
          fullWidth
          margin="normal"
          label="Deuda"
          type="text"
          required
          onChange={handleChange}
          value={deuda}
          name="Deuda"
        />

        <TextField
          fullWidth
          margin="normal"
          label="Arriendo"
          type="text"
          required
          onChange={handleChange}
          value={arriendo}
          name="Arriendo"
        />

        <TextField
          fullWidth
          margin="normal"
          label="Servicios"
          type="text"
          required
          onChange={handleChange}
          value={servicios}
          name="Servicios"
        />

        <TextField
          fullWidth
          margin="normal"
          label="Ocio"
          type="text"
          required
          onChange={handleChange}
          value={ocio}
          name="Ocio"
        />

        <TextField
          fullWidth
          margin="normal"
          label="Otros"
          type="text"
          required
          onChange={handleChange}
          value={otros}
          name="Otros"
        />

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
