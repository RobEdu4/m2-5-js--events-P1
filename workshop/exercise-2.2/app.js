const boxes = 20;

for (let i = 1; i <= boxes; i++) {
  const button = document.createElement("button");
  button.innerText = i;
  button.id = `button-${i}`;

  main.appendChild(button);

  button.addEventListener("click", changeColor);
}

function changeColor(event) {
  const buttonId = event.target.id;
  document.getElementById(buttonId).classList.toggle(`green`);
}
