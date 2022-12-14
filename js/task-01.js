const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);

console.log("");

const titleOfCategory = document.querySelectorAll("ul h2");
const list = document.querySelector("li ul");
const childList = list.children;

// for (const el of titleOfCategory) {
//     console.log(`Category: ${el.textContent}`);
//     console.log(`Elements: ${childList.length}`);
//     console.log("");
// };

titleOfCategory.forEach(function (element, index) {
    console.log(`Category: ${element.textContent}`);
    console.log(`Elements: ${childList.length}`);
    console.log("");
});