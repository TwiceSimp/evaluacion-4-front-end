import React, { useState } from 'react';
import './index.css';
import Aviso from './Aviso';
import FormularioAviso from './FormularioAviso';

const App = () => {
  const [avisos, setAvisos] = useState([]);
  const [nuevoAviso, setNuevoAviso] = useState({ titulo: '', descripcion: '', precio: '' });

  const manejarCambioEntrada = (name, value) => {
    setNuevoAviso((prevAviso) => ({ ...prevAviso, [name]: value }));
  };

  const manejarAgregarAviso = () => {
    if (nuevoAviso.descripcion.trim() === '') {
      alert('Por favor, coloque una descripción al menos.');
      return;
    }

    setAvisos((prevAvisos) => [...prevAvisos, nuevoAviso]);
    setNuevoAviso({ titulo: '', descripcion: '', precio: '' });
  };

  const manejarEliminarAviso = (index) => {
    setAvisos((prevAvisos) => prevAvisos.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>Arriendo de propiedades</h1>
      <FormularioAviso
        nuevoAviso={nuevoAviso}
        onInputChange={manejarCambioEntrada}
        onAgregarAviso={manejarAgregarAviso}
      />
      <div className="contenedor-avisos">
        {avisos.map((aviso, index) => (
          <Aviso key={index} aviso={aviso} onDelete={() => manejarEliminarAviso(index)} />
        ))}
      </div>
    </div>
  );
};

export default App;