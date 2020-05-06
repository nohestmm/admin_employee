import React, { useState } from "react";
import { uuid } from 'uuidv4'

const Formulario = ({guardarEmpleados}) => {

  const [empleado, guardarEmpleado] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    departamento: "",
    fecha: "",
    hora: "",
    funciones: "",
  });
  //Cambio de estado en los input
  const changeState = (event) => {
    guardarEmpleado({
      ...empleado,
      [event.target.name]: event.target.value,
    });
  };
  //error

  const [error, actualizarError] = useState(false);

  //Extrayendo valores
  const {
    nombre,
    apellido,
    edad,
    departamento,
    fecha,
    hora,
    funciones,
  } = empleado;

  //Crear ficha de empleado evento onSubmit
  const submitEmpleado = (event) => {
    event.preventDefault();
    //Validacion de campos vacios
    if (
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      edad.trim() === "" ||
      departamento.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      funciones.trim() === ""
    ) {
      actualizarError(true);
      return;
    }
    //quitar alerta de error
    actualizarError(false);

    //Asignar ID
    empleado.id = uuid();
    //Crear la ficha
guardarEmpleados(empleado);
    //resetear el formulario
    guardarEmpleado({
        nombre: "",
        apellido: "",
        edad: "",
        departamento: "",
        fecha: "",
        hora: "",
        funciones: "",
      });
  };

  return (
    <>
      <h2>Crear ficha de Empleado</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={submitEmpleado}>
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          className="u-full-width"
          placeholder="Nombre"
          onChange={changeState}
          value={nombre}
        ></input>
        <label>Apellido</label>
        <input
          type="text"
          name="apellido"
          className="u-full-width"
          placeholder="Apellido"
          onChange={changeState}
          value={apellido}
        ></input>
        <label>Edad</label>
        <input
          type="text"
          name="edad"
          className="u-full-width"
          placeholder="Edad"
          onChange={changeState}
          value={edad}
        ></input>
        <label>Departamento</label>
        <input
          type="text"
          name="departamento"
          className="u-full-width"
          placeholder="Departamento"
          onChange={changeState}
          value={departamento}
        ></input>
        <label>Fecha de ingreso</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={changeState}
          value={fecha}
        ></input>
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          placeholder=""
          min="09:00"
          max="16:00"
          onChange={changeState}
          value={hora}
        ></input>
        <label>Funciones del Cargo</label>
        <textarea
          className="u-full-width"
          name="funciones"
          placeholder="Funciones"
          rows="3"
          onChange={changeState}
          value={funciones}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar empleado
        </button>
      </form>
    </>
  );
};

export default Formulario;
