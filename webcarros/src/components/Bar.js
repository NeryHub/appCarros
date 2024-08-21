import React from 'react'
import './Bar.css';

// Dados de exemplo para a pesquisa
const items = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Fig",
  "Grape",
  "Kiwi",
  "Lemon",
  "Mango",
  "Orange",
  "Peach",
  "Strawberry",
];

// Referência ao campo de pesquisa e ao elemento para exibir os resultados
const searchBar = document.getElementById('searchBar');
const results = document.getElementById('results');

// Função para filtrar e exibir resultados
function searchItems() {
  // Obter o valor da pesquisa e convertê-lo para minúsculas
  const query = searchBar.value.toLowerCase();
  // Limpar os resultados anteriores
  results.innerHTML = '';

  // Filtrar os itens que contêm a string de pesquisa
  const filteredItems = items.filter(item => item.toLowerCase().includes(query));

  // Exibir os itens filtrados
  filteredItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      li.className = 'result-item';
      results.appendChild(li);
  });
}

// Adicionar um event listener para acionar a função de pesquisa ao digitar
searchBar.addEventListener('input', searchItems);


export default function Bar() {
  return (
    <div>
<h1> Find Your Car </h1>
<input type="text" id="searchBar" placeholder="Pesquisar..."/>

    <ul id="results"></ul>

</div>
  )
}
