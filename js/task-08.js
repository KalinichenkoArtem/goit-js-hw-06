const form = document.querySelector("form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
    
  const { elements: { email, password } } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть запонены!");
  };

  const userData = ({Email: `${email.value}`, Password: `${password.value}`});
  
  event.currentTarget.reset();
  console.log(userData);
};