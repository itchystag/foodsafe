import React, { useState } from 'react';

function AddFood() {
  const [name, setName] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFood = { name, expirationDate };

    try {
      const response = await fetch('/api/food', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newFood),
      });

      if (response.ok) {
        alert('¡Alimento agregado con éxito!');
      } else {
        alert('Error al agregar alimento.');
      }
    } catch (error) {
      console.error('Error al enviar datos al servidor:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Nombre del alimento" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="date" 
        value={expirationDate} 
        onChange={(e) => setExpirationDate(e.target.value)} 
        required 
      />
      <button type="submit">Agregar Alimento</button>
    </form>
  );
}

export default AddFood;
