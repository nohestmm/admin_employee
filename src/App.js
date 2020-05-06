import React, {useState} from 'react';
import Formulario from './components/Formulario';

const App = () => {
  const [empleados, listaEmpleados ] = useState ([]);
  const guardarEmpleados = empleado =>{
    listaEmpleados ([
      ...empleados,
      empleado
    ])
  }
  return (
    <>
<h1>Administrador de Empleados</h1>
<div className="container">
<div className="row">
<div className="one-half column">
<Formulario
guardarEmpleados = {guardarEmpleados} />
</div>
<div className="one-half column">Listado de Empleados</div>
</div>
</div>
    </>
  );
}

export default App;
