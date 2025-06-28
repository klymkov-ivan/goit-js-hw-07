const widget = document.querySelector(".widget");
const changeColor = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColor.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  widget.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});
