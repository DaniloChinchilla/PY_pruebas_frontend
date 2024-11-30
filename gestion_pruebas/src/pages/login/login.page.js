import React, { useState } from 'react';
import './login.page.css';

const LoginPage = () => {

  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name:name, password:password }),
      });

      const data = await response.json();
      console.log(data)
      if (response.ok) {
        localStorage.setItem('authToken', data.token); 
        window.location.href = '/home'; // Redirige a pagina home
      } else {
        // Error en la autenticación
        setError(data.message || 'Error al iniciar sesión');
      }
    } catch (error) {
      //Error en red
      setError('Error de conexión. Por favor, inténtalo más tarde.');
    }
  };


  return (
    <div className='principal'>    
        <div className="login">
        <h2>Iniciar Sesión</h2>
        <form className='formulario'>
            <input type="text" placeholder="Usuario" value={name} onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="button" onClick={handleLogin}>Entrar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    </div>
  );
};

export default LoginPage;