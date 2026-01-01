const button = document.getElementById("buttonSprite");
const audio = document.getElementById("audio");

let clicked = false;

button.addEventListener("click", () => {
  if (!clicked) {
    button.src = "button-clicked.png";
    audio.play();
    clicked = true;
  }
});
