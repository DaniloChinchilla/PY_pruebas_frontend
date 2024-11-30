import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import './proyectos.page.css';

const ProyectosPage = () => {

    const [proyectos, setProyectos] = useState([]);

    const navigate = useNavigate();

    const rederigir = () => {
        navigate("/nuevoproyecto");
      };

    const fetchProeyctos = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/obtenerProyectos`);
            const data = await response.json();
            setProyectos(data);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
        }
    }

    useEffect(() => {
        fetchProeyctos();
      }, []);

    return(
        <div>
            <Navbar />
            <h1>Proyectos</h1>

            <div className='contenedorPrincipal'>

            <div className='cntBoton'>
                <button className='boton' onClick={rederigir}>Nuevo Proyecto</button>
            </div>

            <table border="1">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Estado</th>
                    <th>Fecha Inicio</th>
                    <th>Fecha final</th>
                    <th>Modificar</th>
                </tr>
                </thead>
                <tbody>
                {proyectos.map((proyecto) => (
                    <tr key={proyecto.id_proyecto}>
                    <td>{proyecto.id}</td>
                    <td>{proyecto.nombre}</td>
                    <td>{proyecto.descripcion}</td>
                    <td>{proyecto.nombre_estado}</td>
                    <td>{proyecto.fecha_inicio}</td>
                    <td>{proyecto.fecha_final}</td>
                    <td>
                        <button onClick={() => console.log("modificar")}>Modificar</button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    )

};

export default ProyectosPage;