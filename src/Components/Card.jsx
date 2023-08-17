import React from 'react';

const Card = ({ nombre, color }) => {
  return (
    <div className="card">
      <h2>Tu auto favorito es:</h2>
      <p>Nombre: {nombre}</p>
      <p>Color: {color}</p>
    </div>
  );
};

export default Card;

