const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const itemList = ingredients.map((element) => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = element;
  console.log(item);
  return item;
});

list.append(...itemList);