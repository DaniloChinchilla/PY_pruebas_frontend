import React from 'react';
import Navbar from '../../components/navbar/navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className='contenedorPrincipal'>
        <h1>Bienvenido</h1>
      </div>
    </div>
  );
};

export default HomePage;