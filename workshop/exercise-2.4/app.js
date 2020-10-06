const banner = document.createElement("div");
banner.id = `banner`;
main.appendChild(banner);

const startButton = document.createElement("button");
startButton.id = `startButton`;
startButton.innerText = "Start";
banner.appendChild(startButton);

const gameBox = document.createElement("div");
gameBox.id = `gameBox`;
main.appendChild(gameBox);

const boxes = Math.ceil(math.random() * 10);

const gameTime = 5000;

startButton.addEventListener("click", startGame);

function startGame() {
  startButton.remove();

  for (let i = 1; i <= boxes; i++) {
    const button = document.createElement("button");
    button.id = `button-${i}`;
    button.innerText = i;

    button.style.left = `${Math.random() * 90}vw`;
    button.style.top = `${Math.random() * 90}vh`;

    gameBox.appendChild(button);
  }
}
