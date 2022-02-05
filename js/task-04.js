const value = document.querySelector('#value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');


let counterValue = 0;

const changeValuePlus = () => {
    counterValue+=1;
    value.textContent = counterValue;
};

const changeValueMinus = () => {
    counterValue-=1;
    value.textContent = counterValue;
};


increment.addEventListener('click', changeValuePlus);
 decrement.addEventListener('click', changeValueMinus);



