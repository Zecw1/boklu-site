const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let dinoY = 200;
let velocity = 0;
let gravity = 0.8;
let jumping = false;

function jump() {
  if (!jumping) {
    velocity = -12;
    jumping = true;
  }
}

// klavye
document.addEventListener("keydown", jump);
// mobil
canvas.addEventListener("touchstart", jump);

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  velocity += gravity;
  dinoY += velocity;

  if (dinoY > 200) {
    dinoY = 200;
    velocity = 0;
    jumping = false;
  }

  // dino
  ctx.fillStyle = "white";
  ctx.fillRect(50, dinoY, 40, 40);

  requestAnimationFrame(gameLoop);
}

gameLoop();
