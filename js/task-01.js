const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);

console.log("");

const titleOfCategory = document.querySelectorAll("ul h2");
const list = document.querySelector("li ul");
for (const el of titleOfCategory) {
    console.log(`Category: ${el.textContent}`);
    console.log(`Elements: ${list.children.length}`);
    console.log("");
};


// const list = document.querySelector("li ul");

// console.log(list);

// const b = list.children;
// console.log(b.length);
