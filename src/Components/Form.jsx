import React, { useState } from 'react';

const Form = ({ onSubmit }) => {

  const [auto, setAuto] = useState({
    nombre: '',
    color: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (auto.nombre.trim().length < 3 || auto.nombre.trim() !== auto.nombre || auto.color.trim().length < 6) {
      setError('Por favor, chequea que la información sea correcta');
    } else {
      onSubmit(auto);
      setError('');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>Ingrese el nombre</label>
      <input
        type="text"
        name="nombre"
        placeholder="Debe contener al menos 3 caracteres"
        value={auto.nombre}
        onChange={(e) => setAuto({ ...auto, nombre: e.target.value })}
      />
      <label>Ingrese el color</label>
      <input
        type="text"
        name="color"
        placeholder="Debe contener al menos 6 caracteres"
        value={auto.color}
        onChange={(e) => setAuto({ ...auto, color: e.target.value })}
      />
      <button type="submit">Enviar</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default Form;





