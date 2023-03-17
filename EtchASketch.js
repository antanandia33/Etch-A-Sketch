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
  if (eraserButton.classList.contains('active')) {
    e.target.style.backgroundColor = '#ffffff';
  } else if (!eraserButton.classList.contains('active')) {
    color = document.getElementById('colorChooser').value;
    e.target.style.backgroundColor = color;
  }
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

function activeSizeButton(gridSize) {
  if (smallButton.classList.contains('active')) {
    smallButton.classList.remove('active');
  } else if (mediumButton.classList.contains('active')) {
    mediumButton.classList.remove('active');
  } else if (largeButton.classList.contains('active')) {
    largeButton.classList.remove('active');
  }

  if (gridSize == 'small') {
    smallButton.classList.add('active');
  } else if (gridSize == 'medium') {
    mediumButton.classList.add('active');
  } else if (gridSize == 'large') {
    largeButton.classList.add('active');
  }
}

const grid = document.getElementById('grid');
const eraserButton = document.getElementById('eraserButton');
const clearButton = document.getElementById('clearButton');
const smallButton = document.getElementById('smallButton');
const mediumButton = document.getElementById('mediumButton');
const largeButton = document.getElementById('largeButton');
let color = document.getElementById('colorChooser').value;
let size = 16;
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

eraserButton.onclick= () => eraserButton.classList.toggle('active');
clearButton.onclick= () => clearGrid(size);
smallButton.onclick= () => {
  size = 64;
  clearGrid(size);
  activeSizeButton('small');
}
mediumButton.onclick= () => {
  size = 32;
  clearGrid(size);
  activeSizeButton('medium'); 
}
largeButton.onclick= () => {
  size = 16;
  clearGrid(size);
  activeSizeButton('large'); 
}

window.onload = () => {
  setupGrid(size);
}

