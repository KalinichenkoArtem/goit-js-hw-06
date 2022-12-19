const btnOne = document.querySelector("button[data-action='decrement']");
const btnTwo = document.querySelector("button[data-action='increment']");
const value = document.querySelector("span");

let counterValue = 0;

btnOne.addEventListener("click", () => {
    counterValue -= 1;
    value.textContent = counterValue;
    console.log(counterValue);
});

btnTwo.addEventListener("click", () => {
    counterValue += 1;
    value.textContent = counterValue;
    console.log(counterValue);
});