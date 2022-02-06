function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const btn = document.querySelector('.change-color');
const text = document.querySelector('.color');
const body = document.querySelector('body');


const changeColor = () => {
  const color = getRandomHexColor();
  text.textContent = color;
  body.style.background = color;
}

btn.addEventListener('click', changeColor);