// src/pages/Home.js

import React, { useState } from 'react';
import Filter from '../components/Filter';
import CarList from '../components/CarList';
import LatestCars from '../components/LatestCars';
import { cars } from '../data/cars';

export default function Home() {
  const [filteredCars, setFilteredCars] = useState(cars);

  const handleFilter = (filters) => {
    const filtered = cars.filter(car =>
      (!filters.marca || car.marca.includes(filters.marca)) &&
      (!filters.modelo || car.modelo.includes(filters.modelo)) &&
      (!filters.ano || car.ano === filters.ano) &&
      (!filters.preco || car.preco <= filters.preco)
    );
    setFilteredCars(filtered);
  };

  return (
    <div id="home">
      <LatestCars cars={cars} />
      <section id="carros">
        <Filter onFilter={handleFilter} />
        <CarList cars={filteredCars} />
      </section>
    </div>
  );
}
