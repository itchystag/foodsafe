import React, { useEffect, useState } from 'react';

function FoodList() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener la lista de alimentos
    fetch('/api/food') // No hace falta usar http://localhost:5000 porque ya tenemos el proxy configurado
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((error) => console.error('Error al obtener alimentos:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Alimentos</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>
            {food.name} - Vence el: {new Date(food.expirationDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodList;
