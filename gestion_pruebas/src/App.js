import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/login.page';
import HomePage from './pages/home/home.page';
import RecursosPage from './pages/recursos/recursos.page';
import ProyectosPage from './pages/proyectos/proyectos.page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/recursos" element={<RecursosPage />} />
        <Route path="/proyectos" element={<ProyectosPage />} />
      </Routes>
    </Router>
  );
}

export default App;