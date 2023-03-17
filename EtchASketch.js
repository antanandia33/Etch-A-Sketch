function clearGrid(size) {
  while(grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  setupGrid(size);
}

function changeColor(e) {
  if(e.type === 'mouseover' && !mouseDown) {
    return;
  }
  color = document.getElementById('colorChooser').value;
  e.target.style.backgroundColor = color;
}

function setupGrid(gridSize) {
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  for (let i = 0; i < gridSize*gridSize; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('gridElement');
    gridElement.addEventListener('mouseover', changeColor);
    gridElement.addEventListener('mousedown', changeColor);
    grid.appendChild(gridElement);
  }
}

const grid = document.getElementById('grid');
const clearButton = document.getElementById('clearButton');
const smallButton = document.getElementById('smallButton');
const mediumButton = document.getElementById('mediumButton');
const largeButton = document.getElementById('largeButton');
let color = document.getElementById('colorChooser').value;
let size = 16;
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
clearButton.onclick= () => clearGrid(size);
smallButton.onclick= () => {
  size = 64;
  clearGrid(size); 
}
mediumButton.onclick= () => {
  size = 32;
  clearGrid(size) 
}
largeButton.onclick= () => {
  size = 16;
  clearGrid(size) 
}

window.onload = () => {
  setupGrid(size);
}

