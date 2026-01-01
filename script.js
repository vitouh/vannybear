const button = document.getElementById("buttonSprite");
const video = document.getElementById("tvVideo");

let clicked = false;

button.addEventListener("click", () => {
  if (clicked) return;

  clicked = true;
  button.src = "button-clicked.png";

  video.style.opacity = 1;
  video.muted = false;
  video.play();
});
