const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElement = document.querySelector('ul');
const elements = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const ingredient = ingredients[i];
  const liElement = document.createElement('li');
  liElement.textContent = ingredient;
  liElement.classList.add('item');

  elements.push(liElement);
}

ulElement.append(...elements);