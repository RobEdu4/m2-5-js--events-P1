// Exercise 1.1
// ------------

const body = document.querySelector(`body`);
const result = document.getElementById(`result`);

let outcome = true;

setTimeout(function () {
  outcome = false;
}, 1000);

function clickEvent() {
  outcome ? (result.innerText = "You Win!") : (result.innerText = "You lose!");
  body.removeEventListener(`click`, clickEvent);
}

body.addEventListener(`click`, clickEvent);

console.log("exercise 1.1");
