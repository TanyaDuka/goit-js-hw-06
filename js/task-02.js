const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul');


const newIngredientList = ingredients.map(ingredient => {
  const markupIngredient = document.createElement('li');
  markupIngredient.textContent = ingredient;
  markupIngredient.classList.add('item');
  return markupIngredient;
});

list.append(...newIngredientList);



// const list = document.querySelector('#ingredients');

// const elements = ingredients.map(ingredient => {
//   const element = document.createElement('li');
//   element.textContent = ingredient;
//   element.classList.add('item');
//   console.log(element);
//   return element;
// });


// list.append(...elements);