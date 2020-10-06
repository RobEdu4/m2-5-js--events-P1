// Exercise 1.0
// ------------

const body = document.querySelector(`body`);
const result = document.getElementById(`result`);

body.addEventListener(`click`, clickEvent);

function clickEvent() {
  result.innerText = "Congratulations!";
  body.removeEventListener(`click`, clickEvent);
}

console.log("exercise-1");
