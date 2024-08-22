// src/components/CarList.js

import React from 'react';
import CarCard from './CarCard';

export default function CarList({ cars }) {
  return (
    <div className="car-list">
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
