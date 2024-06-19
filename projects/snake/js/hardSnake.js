// board
const blockSize = 25;
const rows = 15;
const cols = 15;
let board;
let context;

//snake head
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

let velocityX = 0;
let velocityY = 0;

// snake body
let snakeBody = [];

//food
let foodX;
let foodY;

let gameOver = false;

window.onload = function () {
  board = document.querySelector(".board");
  board.height = rows * blockSize;
  board.width = cols * blockSize;
  context = board.getContext("2d"); // gebruikt om op het board te tekenen

  placeFood();
  document.addEventListener("keyup", changeDirection);
  setInterval(update, 700 / 10); //elke 100ms roept het de update function aan zodat het de snake zich opnieuw tekent met de nieuwe coördinaten op het board
};

function update() {
  if (gameOver) {
    return;
  }

  context.fillStyle = "white";
  context.fillRect(0, 0, board.width, board.height);

  context.fillStyle = "blue";
  context.fillRect(foodX, foodY, blockSize, blockSize);

  // wanneer de snake op de zelfde plek als de food is
  if (snakeX == foodX && snakeY == foodY) {
    snakeBody.push([foodX, foodY]);
    placeFood();
  }

  // zorgt ervoor dat 1 segment in de body naar de volgende gaat
  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }
  // zorgt ervoor dat de segment van de body naar de head gaat
  if (snakeBody.length) {
    snakeBody[0] = [snakeX, snakeY];
  }

  context.fillStyle = "red";
  snakeX += velocityX * blockSize;
  snakeY += velocityY * blockSize;
  context.fillRect(snakeX, snakeY, blockSize, blockSize);
  for (let i = 0; i < snakeBody.length; i++) {
    context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
  }

  // game over regels

  //wanneer snake over het speelboard heen gaat gameOver
  if (
    snakeX < 0 ||
    snakeX > cols * blockSize ||
    snakeY < 0 ||
    snakeY > rows * blockSize
  ) {
    gameOver = true;
    alert("GameOver Bedankt voor het spelen");
  }

  //wanneer snake zijn eigen body aanraakt gameOver
  for (let i = 0; i < snakeBody.length; i++) {
    if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
      gameOver = true;
      alert("GameOver Bedankt voor het spelen");
    }
  }
}

// geeft de snelheid aan het bepaalde type command die ik aangeef
function changeDirection(e) {
  if (e.code == "ArrowUp" && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
  } else if (e.code == "ArrowDown" && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
  } else if (e.code == "ArrowLeft" && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
  } else if (e.code == "ArrowRight" && velocityX != -1) {
    velocityX = 1;
    velocityY = 0;
  }
}

// geeft een random getal voor de x en y locatie voor food
function placeFood() {
  foodX = Math.floor(Math.random() * cols) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
}
