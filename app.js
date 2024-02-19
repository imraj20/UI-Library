import { createTemplate, updateState } from './ui-library/index.js';

let state = { count: 0 };

const render = () => {
  const container = document.getElementById('app');
  const template = createTemplate(state);

  container.innerHTML = ''; 
  container.appendChild(template.el); 
};


const handleClick = () => {
  state.count++; 
  updateState(state); 
};


document.addEventListener('DOMContentLoaded', () => {
  render();

  
  const addButton = document.getElementById('addButton');
  addButton.addEventListener('click', handleClick);
});
