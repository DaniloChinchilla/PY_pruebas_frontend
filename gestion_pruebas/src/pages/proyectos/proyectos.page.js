import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import ModalNuevoProyecto from './modalNuevoProyecto';

const ProyectosPage = () => {

    const [proyectos, setProyectos] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

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
                <button className='boton' onClick={openModal}>Nuevo Proyecto</button>
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

            {isOpen && (
                <ModalNuevoProyecto closeModal={closeModal}/>
            )}
        </div>
    )

};

export default ProyectosPage;