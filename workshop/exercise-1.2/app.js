// Exercise 1.2
// ------------

const body = document.querySelector(`body`);
const result = document.getElementById(`result`);
const time = document.getElementById(`time`);
const timeAmt = Math.floor(Math.random() * 10);

const timerChecker = timeAmt * 1000;

time.innerText = `${timeAmt}`;

let outcome = true;

setTimeout(function () {
  outcome = false;
}, timerChecker);

body.addEventListener("click", clickEvent);

function clickEvent() {
  outcome ? (result.innerText = "You win!") : (result.innerText = "You lose!");
  body.removeEventListener("click", clickEvent);
}

console.log("exercise 1.2");
