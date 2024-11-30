import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';

const RecursosPage = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [roles, setRoles] = useState([]);
  const [recursos, setRecursos] = useState([]);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({});
  const [roleSeleccionado, setRoleSeleccionado] = useState({});

  useEffect(() => {
    fetchUsers();
    fetchRoles();
    fetchRecursos();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/obtenerUsuarios`);
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  };

  const fetchRoles = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/obtenerRoles`);
      const data = await response.json();
      console.log(data)
      setRoles(data);
    } catch (error) {
      console.error('Error al obtener roles:', error);
    }
  };

  const fetchRecursos = async () => {
    console.log("rec")
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/obtenerRecursos`);
      const data = await response.json();
      setRecursos(data);
    } catch (error) {
      console.error('Error al obtener roles:', error);
    }
  };

  //agregar recurso
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/agregarRecurso`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id_usuario: usuarioSeleccionado.id_usuario,
            nombre_usuario: usuarioSeleccionado.nombre,
            email: usuarioSeleccionado.email,
            id_role: roleSeleccionado.id_rol
        }),
      });
      
      if (!response.ok) {
        throw new Error('Error al guardar usuario');
      }

      fetchRecursos();
    } catch (error) {
      console.error('Error al guardar Recurso:', error);
    }
  };

  // Eliminar un recurso
  const handleDelete = async (recurso) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/eliminarRecurso`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id_recurso: recurso.id_recurso
        }),
      });
      console.log(response)
      if (!response.ok) {
        throw new Error('Error al eliminar usuario');
      }

      fetchRecursos(); 
    } catch (error) {
      console.error('Error al eliminar recurso:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Recursos</h1>

      <form onSubmit={handleSubmit}>
        <select
          value={usuarioSeleccionado.nombre}
          placeholder="Nombre del usuario"
          required
          onChange={(e) => {
            const seleccionarUsuario = usuarios.find(
                (usuario) => usuario.nombre.toString() === e.target.value
              );
            setUsuarioSeleccionado(seleccionarUsuario);
          }}
        >
            <option value="">Seleccionar Usuario</option>
                {usuarios.map((usuario) => (
                <option key={usuario.id_usuario} value={usuario.nombre}>
                    {usuario.nombre}
                </option>
                ))}
        </select>
        <select
          value={roleSeleccionado.nom}
          onChange={(e) =>{
            console.log(e.target.value)
            const seleccionarRole = roles.find(
                (role) => role.nombre.toString() === e.target.value
            );
            setRoleSeleccionado(seleccionarRole);
          }}
          required
        >
          <option value="">Seleccionar rol</option>
          {roles.map((role) => (
            <option key={role.id_rol} value={role.nombre}>
              {role.nombre}
            </option>
          ))}
        </select>
        <button type="submit">{'Agregar'}</button>
      </form>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {recursos.map((recurso) => (
            <tr key={recurso.id_recurso}>
              <td>{recurso.id_recurso}</td>
              <td>{recurso.nombre}</td>
              <td>{recurso.nombre_rol}</td>
              <td>
                <button onClick={() => handleDelete(recurso)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecursosPage;