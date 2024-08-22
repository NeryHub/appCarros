// src/components/Filter.js

import React, { useState } from 'react';

export default function Filter({ onFilter }) {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [preco, setPreco] = useState('');

  const handleFilter = () => {
    onFilter({ marca, modelo, ano, preco });
  };

  return (
    <div className="filter-section">
      <input type="text" placeholder="Marca" value={marca} onChange={e => setMarca(e.target.value)} />
      <input type="text" placeholder="Modelo" value={modelo} onChange={e => setModelo(e.target.value)} />
      <input type="number" placeholder="Ano" value={ano} onChange={e => setAno(e.target.value)} />
      <input type="number" placeholder="Preço Máximo" value={preco} onChange={e => setPreco(e.target.value)} />
      <button onClick={handleFilter}>Filtrar</button>
    </div>
  );
}
