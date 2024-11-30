import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import './nuevoProyecto.css'

const NuevoProyecto = () => {

    const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
        fechaInicio: "",
        fechaFinal: "",
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos del formulario:", formData);
    };


    return(
        <div className='divprincipal'>
            <Navbar />
            <h1>Ingresar nuevo proyecto</h1>
            <div className='contenedor_formulario'>
                <div className='contendorItem'>
                    <input
                        type="text"
                        id="nombre"
                        name='nombre'
                        placeholder='ingrese nombre del proyecto'
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='contendorItem'>
                    <textarea
                        id="descripcion"
                        placeholder="descripcion"
                        name='descricion'
                        onChange={handleChange}
                        rows="4"
                        required
                    ></textarea>
                </div>

                <div className='contendorItem'>
                <label htmlFor="fechaInicio">
                    Fecha de Inicio:
                </label>
                <input
                    type="date"
                    id="fechaInicio"
                    name="fechaInicio"
                    value={formData.fechaInicio}
                    onChange={handleChange}
                    required
                />
                </div>

                <div className='contendorItem'>
                <label htmlFor="fechaFinal">
                    Fecha Final:
                </label>
                <input
                    type="date"
                    id="fechaFinal"
                    name="fechaFinal"
                    value={formData.fechaFinal}
                    onChange={handleChange}
                    required
                />
                </div>

                <button
                type="submit"
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
                onClick={handleSubmit}
                >
                Enviar
                </button>
            </div>
        </div>
    )
}

export default NuevoProyecto;