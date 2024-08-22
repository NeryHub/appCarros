// src/components/Header.js

import React from 'react';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href ='/'>Home</a></li>
          <li><a href ='/novidades'>Novidades</a></li>
          <li><a href ='/car-list'>Carros</a></li>
          <li><a href ='/sobre'>Sobre Nós</a></li>
          <li><a href ='/contacto'>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
