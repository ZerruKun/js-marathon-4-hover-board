const board = document.querySelector("#board");
const colors = ["#a40631", "#070c6f", "#084c62", "#086238", "#86970a","#690982","#540982","#915a0a"];
const SQUARES_NUMBER = 500;

const setColor = (event) => {
  const element = event.target
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

// const setColor = (element) => {
//   const color = getRandomColor();
//   element.style.backgroundColor = color;
//   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
// };

const removeColor = (event) => {
  const element = event.target
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
};

// const removeColor = (element) => {
//   element.style.backgroundColor = "#1d1d1d";
//   element.style.boxShadow = `0 0 2px #000`;
// };

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  // square.addEventListener("mouseover", () => {
  //   setColor(square);
  // });

  // square.addEventListener("mouseleave", () => {
  //   removeColor(square);
  // });

  square.addEventListener("mouseover", setColor);

  square.addEventListener("mouseleave", removeColor);

  board.append(square);
}