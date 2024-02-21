import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AgregarEmpleado() {
    
    let Navegacion = useNavigate();
    const [empleado, SetEmpleado] = useState({
        nombre:"",
        departamento:"",
        sueldo:""
    })

    const {nombre, departamento, sueldo} = empleado;

   const OnInputChange = (e) => {
        SetEmpleado({...empleado, [e.target.name] : e.target.value})
   }

   const onSubmit = async (e) =>{
        e.preventDefault();
        const urlBase = "http://localhost:8080/rh-app/empleados";
        await axios.post(urlBase, empleado);
        Navegacion('/');
   }
    

  return (
    <div classNameName='container'>
        <div className='container text-center' style={{margin:"30px"}}>
            <h3>Agregar Empleado</h3>
        </div>
        <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
            <label htmlfor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" 
            id="nombre" name="nombre" required={true} 
            value={nombre}  onChange={(e) => OnInputChange(e)} />
        </div>
        <div className="mb-3">
            <label htmlfor="departamento" className="form-label">Departamento</label>
            <input type="text" className="form-control" id="departamento" name="departamento" 
             value={departamento}  onChange={(e) => OnInputChange(e)} 
            />
        </div>
        <div className="mb-3">
            <label htmlfor="sueldo" className="form-label">Sueldo</label>
            <input type="number" step="any" className="form-control" id="sueldo" name="sueldo" 
            value={sueldo}  onChange={(e) => OnInputChange(e)}
            />
        </div>
        <div className='text-center'>
            <button type="submit" className="btn btn-warning btn-sm me-3">Agregar</button>
            <a href="/" className='btn btn-danger btn-sm'>Regresar</a>
            
        </div>
        
        </form>
    </div>
  )
}
