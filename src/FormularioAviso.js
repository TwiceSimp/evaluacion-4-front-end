import React from 'react';

const FormularioAviso = ({ nuevoAviso, onInputChange, onAgregarAviso }) => {
  const manejarCambioEntrada = (e) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  return (
    <div className="formulario-aviso">
      <input
        type="text"
        name="titulo"
        placeholder="Título"
        value={nuevoAviso.titulo}
        onChange={manejarCambioEntrada}
      />
      <input
        type="text"
        name="descripcion"
        placeholder="Descripción/Dirección"
        value={nuevoAviso.descripcion}
        onChange={manejarCambioEntrada}
        required
      />
      <input
        type="text"
        name="precio"
        placeholder="Precio"
        value={nuevoAviso.precio}
        onChange={(e) => {
          const precio = e.target.value;
          // Verifica si el primer carácter es un número o el símbolo "$"
          if (/^\d*$/.test(precio.charAt(0)) || precio.charAt(0) === '$') {
            onInputChange('precio', precio);
          }
        }}
      />
      <button onClick={onAgregarAviso}>Agregar</button>
    </div>
  );
};

export default FormularioAviso;