function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const clearBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

const createBoxes = (amount) => {
  boxes.innerHTML = '';
  const arr = [];
  for (let i = 0; i < amount; i += 1){
    const element = `<div style='background-color:${getRandomHexColor()}; width:${30 + 10 * i}px; height:${30 + 10 * i}px;'></div>`;
    arr.push(element);
  }

  const arrStr = arr.join('');
  boxes.insertAdjacentHTML("afterbegin", arrStr);
}

const destroyBoxes = () => {
  boxes.innerHTML = '';
}


createBtn.addEventListener('click', ()=>createBoxes(Number(input.value)));
clearBtn.addEventListener('click', destroyBoxes);