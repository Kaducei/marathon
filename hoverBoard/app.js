const board = document.querySelector("#board");
const colors = [
  "rgb(44, 3, 95)",
  "rgb(102, 1, 225)",
  "rgb(138, 82, 207)",
  "rgb(82, 21, 215)",
  "rgb(132, 9, 157);",
  "rgb(22, 227, 238)",
  "rgb(54, 141, 146)",
  "rgb(5, 111, 218)",
  "rgb(40, 4, 239)",
];
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}
function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
