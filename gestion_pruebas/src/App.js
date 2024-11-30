import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/login.page';
import HomePage from './pages/home/home.page';
import RecursosPage from './pages/recursos/recursos.page';
import ProyectosPage from './pages/proyectos/proyectos.page';
import NuevoProyecto from './pages/proyectos/nuevoProyecto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/recursos" element={<RecursosPage />} />
        <Route path="/proyectos" element={<ProyectosPage />} />
        <Route path="/nuevoproyecto" element={<NuevoProyecto />} />
      </Routes>
    </Router>
  );
}

export default App;