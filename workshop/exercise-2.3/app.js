const boxes = 20;

for (let i = 1; i <= boxes; i++) {
  const button = document.createElement("button");
  button.id = `button${i}`;
  button.innerText = i;

  button.style.left = `${Math.random() * 95}vw`;
  button.style.top = `${Math.random() * 90}vh`;

  main.appendChild(button);

  button.addEventListener("click", changeColor);
}

function changeColor(event) {
  const buttonId = event.target.id;
  document.getElementById(buttonId).classList.toggle(`green`);
}
