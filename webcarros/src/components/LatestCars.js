// src/components/LatestCars.js

import React from 'react';
import CarCard from './CarCard';

export default function LatestCars({ cars }) {
  const latestCars = cars.slice(-5); // Pega os últimos 5 carros adicionados

  return (
    <div id="novidades" className="latest-cars">
      <h2>Últimos Carros Adicionados</h2>
      <div className="car-list">
        {latestCars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}
