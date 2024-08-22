// src/components/CarCard.js

import React from 'react';

export default function CarCard({ car }) {
  return (
    <div className="car-card">
      <img src={car.imagem} alt={`${car.marca} ${car.modelo}`} />
      <h3>{car.marca} {car.modelo}</h3>
      <p>Ano: {car.ano}</p>
      <p>Preço: ${car.preco}</p>
      <button>Fazer Reserva</button>
    </div>
  );
}
