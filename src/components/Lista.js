import React from 'react';
const Lista = ({empleado, eliminarEmpleado}) => (
<div className="listado">
<p>Nombre: <span>{empleado.nombre}</span></p>
<p>Apellido: <span>{empleado.apellido}</span></p>
<p>Edad: <span>{empleado.edad}</span></p>
<p>Departamento: <span>{empleado.departamento}</span></p>
<p>Fecha: <span>{empleado.fecha}</span></p>
<p>Hora: <span>{empleado.hora}</span></p>
<p>Funciones: <span>{empleado.funciones}</span></p>
<button 
className="button eliminar u-full-width"
onClick={()=> eliminarEmpleado(empleado.id)}
>Eliminar &times;</button>
    </div>
    )

 
export default Lista;