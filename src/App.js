import React from 'react';
import Formulario from './components/Formulario';

const App = () => {
  return (
    <>
<h1>Administrador de Empleados</h1>
<div className="container">
<div className="row">
<div className="one-half column">
<Formulario />
</div>
<div className="one-half column">Listado de Empleados</div>
</div>
</div>
    </>
  );
}

export default App;
