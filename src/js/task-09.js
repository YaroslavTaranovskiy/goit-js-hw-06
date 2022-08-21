function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const span = document.querySelector(".color");
const chgBtn = document.querySelector(".change-color");

chgBtn.addEventListener("click", changeBgndColor);

function changeBgndColor() {
  const ourColor = getRandomHexColor();
  body.style.backgroundColor = `${ourColor}`;
  span.textContent = `${ourColor}`;
}