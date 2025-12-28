const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scoreEl = document.getElementById("score");

let score = 0;
let isJumping = false;

/* ZIPLAMA */
function jump() {
  if (isJumping) return;

  isJumping = true;
  dino.classList.add("jump");

  setTimeout(() => {
    dino.classList.remove("jump");
    isJumping = false;
  }, 600);
}

/* TUŞ + MOBİL */
document.addEventListener("keydown", jump);
document.addEventListener("touchstart", jump);

/* ÇARPIŞMA + SKOR */
setInterval(() => {
  const dinoBottom = parseInt(
    window.getComputedStyle(dino).getPropertyValue("bottom")
  );

  const cactusRight = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("right")
  );

  // ÇARPIŞMA
  if (cactusRight > 520 && cactusRight < 560 && dinoBottom < 40) {
    alert("GAME OVER\nSkor: " + score);
    location.reload();
  }

  // SKOR
  score++;
  scoreEl.innerText = score;

}, 100);
