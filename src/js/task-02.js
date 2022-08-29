const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//{ ВАРІАНТ РОБОТИ ЧЕРЕЗ ЦИКЛ }


// const ulElement = document.querySelector('ul');
// const elements = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredient = ingredients[i];
//   const liElement = document.createElement('li');
//   liElement.textContent = ingredient;
//   liElement.classList.add('item');

//   elements.push(liElement);
// }

// ulElement.append(...elements);


const ulElement = document.querySelector("ul");
const elements = ingredients.map(option => {

  const titleEl = document.createElement("li");
  titleEl.classList.add("item");
  titleEl.textContent = option;

  return titleEl;
});

console.log(elements);
ulElement.append(...elements)