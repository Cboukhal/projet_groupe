const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score');

const gridSize = 20;
const canvasSize = canvas.width / gridSize;

let snake = [{ x: 10, y: 10 }];
let direction = { x: 0, y: 0 };
let food = null;
let gameOver = false;
let score = 0;

const imgFood = new Image();
imgFood.src = 'images/food.png';

function generateFood() {
  let newFood;
  let isOnSnake;

  do {
    newFood = {
      x: Math.floor(Math.random() * canvasSize),
      y: Math.floor(Math.random() * canvasSize)
    };

    isOnSnake = snake.some(segment => segment.x === newFood.x && segment.y === newFood.y);
  } while (isOnSnake);

  return newFood;
}

function drawRect(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize);
}

function drawGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dessiner le serpent (tête plus foncée)
  snake.forEach((segment, index) => {
    const color = index === 0 ? '#006400' : '#228B22';
    drawRect(segment.x, segment.y, color);
  });

  // Dessiner la nourriture (image)
  ctx.drawImage(imgFood, food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

function updateSnake() {
  const newHead = {
    x: snake[0].x + direction.x,
    y: snake[0].y + direction.y
  };

  if (newHead.x === food.x && newHead.y === food.y) {
    snake.unshift(newHead);
    food = generateFood();
    score++;
    scoreDisplay.textContent = 'Score: ' + score;
  } else {
    snake.pop();
    snake.unshift(newHead);
  }
}

function checkCollision() {
  const head = snake[0];

  if (
    head.x < 0 || head.x >= canvasSize ||
    head.y < 0 || head.y >= canvasSize
  ) {
    gameOver = true;
  }

  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      gameOver = true;
    }
  }

  if (gameOver) {
    alert("Fin de partie !");
    snake = [{ x: 10, y: 10 }];
    direction = { x: 1, y: 0 };
    food = generateFood();
    score = 0;
    scoreDisplay.textContent = 'Score: ' + score;
    gameOver = false;
  }
}

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      if (direction.y === 0) direction = { x: 0, y: -1 };
      break;
    case 'ArrowDown':
      if (direction.y === 0) direction = { x: 0, y: 1 };
      break;
    case 'ArrowLeft':
      if (direction.x === 0) direction = { x: -1, y: 0 };
      break;
    case 'ArrowRight':
      if (direction.x === 0) direction = { x: 1, y: 0 };
      break;
  }
});

imgFood.onload = () => {
  food = generateFood();
  setInterval(gameLoop, 100);
};

function gameLoop() {
  if (!gameOver) {
    updateSnake();
    checkCollision();
    drawGame();
  }
}