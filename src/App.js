import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";

const App = () => {
//empleados en localstorage
let empleadosInicio = JSON.parse(localStorage.getItem('empleados'));
if (!empleadosInicio){
  empleadosInicio = [];
}

  //Arreglo de empleados
  const [empleados, listaEmpleados] = useState(empleadosInicio);
  //useEffect
  useEffect(() => {
    let empleadosInicio = JSON.parse(localStorage.getItem('empleados'));
if (empleadosInicio)
  localStorage.setItem('empleados', JSON.stringify(empleados))
  else 
  localStorage.setItem('empleados', JSON.stringify([]))

  }, [empleados])
  //crear listado
  const guardarEmpleados = (empleado) => {
    listaEmpleados([...empleados, empleado]);
  };
  //eliminar empleado
  const eliminarEmpleado = (id) => {
    const nuevaLista = empleados.filter((el) => el.id !== id);
    listaEmpleados(nuevaLista);
  };
  //condicional listado
  const tituloListado = empleados.length
    ? "Lista de empleados"
    : "No existen empleados";
  return (
    <>
      <h1>Administrador de Empleados</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
            guardarEmpleados={guardarEmpleados} 
            />
          </div>
          <div className="one-half column">
            <h2>{tituloListado}</h2>
            {empleados.map((empleado) => (
              <Lista
                key={empleado.id}
                empleado={empleado}
                eliminarEmpleado={eliminarEmpleado}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
