import React from 'react';

const Aviso = ({ aviso, onDelete }) => {
  const { titulo, descripcion, precio } = aviso;

  return (
    <div className="aviso">
      <div className="encabezado">
        <h3>{titulo}</h3>
        <button className="boton-eliminar" onClick={onDelete}>
          X
        </button>
      </div>
      <p>{descripcion}</p>
      <p className="precio">{formatoPrecio(precio)}</p>
    </div>
  );
};

const formatoPrecio = (precio) => {
  if (precio.length === 0) {
    return '';
  }

  const numeroFormateado = parseFloat(precio.replace(/[^0-9.]/g, '')).toLocaleString('es');
  return `$${numeroFormateado}`;
};

export default Aviso;