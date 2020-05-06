import React, {useState} from 'react';

const Formulario = () => {

    const [empleado, guardarEmpleado]= useState({
        nombre:'',
        apellido:'',
        edad:'',
        departamento:'',
        fecha:'',
        hora:'',
        funciones:''

    });

    const changeState =(event)=>{
      guardarEmpleado({
          ...empleado,
          [event.target.name] : event.target.value
      })
    }
    return (  
    <>
    <h2>Crear ficha de Empleado</h2>
    <form>
        <label>Nombre</label>
        <input
        type ="text"
        name="nombre"
        className="u-full-width"
        placeholder="Nombre"
        onChange={changeState}>
        </input>
        <label>Apellido</label>
        <input
        type ="text"
        name="apellido"
        className="u-full-width"
        placeholder="Apellido"
        onChange={changeState}>
            
        </input>
        <label>Edad</label>
        <input
        type ="text"
        name="edad"
        className="u-full-width"
        placeholder="Edad"
        onChange={changeState}>
        </input>
        <label>Departamento</label>
        <input
        type ="text"
        name="departamento"
        className="u-full-width"
        placeholder="Departamento"
        onChange={changeState}>
        </input>
        <label>Fecha de ingreso</label>
        <input
        type ="date"
        name="fecha"
        className="u-full-width"
        onChange={changeState}>
        </input>
        <label>Hora</label>
        <input
        type ="time"
        name="hora"
        className="u-full-width"
        placeholder=""
        min="09:00" 
        max="16:00"
        onChange={changeState}>
        </input>
        <label>Funciones del Cargo</label>
        <textarea 
        className="u-full-width"
        name="funciones"
        placeholder="Funciones" 
        rows="3"
        onChange={changeState}
        ></textarea>
        <button
        type="submit"
        className="u-full-width button-primary">
            Agregar empleado
        </button>
    </form>
    </>)
    ;
}
 
export default Formulario ;