const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange'];
const container = document.getElementById('game-container');
const instruction = document.getElementById('instruction');

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function createSquares() {
  const correctColor = getRandomColor();
  
  for (let i = 0; i < colors.length; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.textContent = colors[i];
    
    // Add click event to each square
    square.addEventListener('click', () => checkSquare(square, correctColor));
    
    container.appendChild(square);
  }
}

function checkSquare(square, correctColor) {
  if (square.textContent === correctColor) {
    // Correct square clicked
    instruction.textContent = 'You chose the correct color! Well done!';
    square.classList.add('correct');
  } else {
    // Incorrect square clicked
    instruction.textContent = 'Oops! Try again!';
    square.classList.add('incorrect');
  }

  // Remove click event from squares after user's selection
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.removeEventListener('click', checkSquare));
}

createSquares();