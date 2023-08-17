import React, { useState } from 'react';
import Form from './Components/Form';
import Card from './Components/Card';
import './App.css';


const App = () => {
  const [formData, setFormData] = useState(false);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="app">
      <h1>Auto Favorito</h1>
      <Form onSubmit={handleFormSubmit} />
      {formData && <Card {...formData} />}
    </div>
  );
};

export default App;


