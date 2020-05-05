import React from 'react';

const Formulario = () => {
    return (  
    <>
    <h2>Crear ficha de Empleado</h2>
    <form>
        <label>Nombre</label>
        <input
        type ="text"
        name="name"
        className="u-full-width"
        placeholder="Nombre">
        </input>
        <label>Apellido</label>
        <input
        type ="text"
        name="apellido"
        className="u-full-width"
        placeholder="Apellido">
        </input>
        <label>Edad</label>
        <input
        type ="text"
        name="edad"
        className="u-full-width"
        placeholder="Edad">
        </input>
        <label>Departamento</label>
        <input
        type ="text"
        name="departamento"
        className="u-full-width"
        placeholder="Departamento">
        </input>
        <label>Fecha de ingreso</label>
        <input
        type ="date"
        name="fecha"
        className="u-full-width">
        </input>
        <label>Hora</label>
        <input
        type ="time"
        name="fecha"
        className="u-full-width"
        placeholder=""
        min="09:00" 
        max="16:00">
        </input>
        <label>Funciones del Cargo</label>
        <textarea 
        className="u-full-width"
        placeholder="Funciones" 
        rows="3"
        ></textarea>
    </form>
    </>)
    ;
}
 
export default Formulario ;