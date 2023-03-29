import "./form.scss";
import { useState, useContext } from "react";
import { UserContext } from "../../context/user-context";
import TextInput from "../text-input/text-input";
import Button from "../button/button.component";

export default function Form() {
  const [formFields, setFormFields] = useState({});
  const { setCurrentUser } = useContext(UserContext);

  function handleChange(e:any) {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  }

  function handleSubmit(e:any) {
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

        <TextInput
          label="Primer nombre"
          type="text"
          required
          onChange={handleChange}
          value={primerNombre}
          name="primerNombre"
        />

        <TextInput
          label="Apellido"
          type="text"
          required
          onChange={handleChange}
          value={apellido}
          name="apellido"
        />

        <h2>Ingresos</h2>

        <TextInput
          label="Ingresos Netos"
          type="text"
          required
          onChange={handleChange}
          value={ingresosNetos}
          name="ingresosNetos"
        />

        <h2>Gastos</h2>

        <TextInput
          label="Alimentacion"
          type="text"
          required
          onChange={handleChange}
          value={alimentacion}
          name="alimentacion"
        />

        <TextInput
          label="Transporte"
          type="text"
          required
          onChange={handleChange}
          value={transporte}
          name="Transporte"
        />

        <TextInput
          label="Deuda"
          type="text"
          required
          onChange={handleChange}
          value={deuda}
          name="Deuda"
        />

        <TextInput
          label="Arriendo"
          type="text"
          required
          onChange={handleChange}
          value={arriendo}
          name="Arriendo"
        />

        <TextInput
          label="Servicios"
          type="text"
          required
          onChange={handleChange}
          value={servicios}
          name="Servicios"
        />

        <TextInput
          label="Ocio"
          type="text"
          required
          onChange={handleChange}
          value={ocio}
          name="Ocio"
        />

        <TextInput
          label="Otros"
          type="text"
          required
          onChange={handleChange}
          value={otros}
          name="Otros"
        />

        <Button type="submit">Enviar</Button>

      </form>
    </div>
  );
}
