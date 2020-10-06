const banner = document.createElement("div");
banner.id = `banner`;
main.appendChild(banner);

const startButton = document.createElement("button");
startButton.id = `startButton`;
startButton.innerText = "Start";
banner.appendChild(startButton);

const timer = document.createElement("div");
timer.id = `timer`;
banner.appendChild(timer);

const gameBox = document.createElement("div");
gameBox.id = `gameBox`;
main.appendChild(gameBox);

const notification = document.createElement("p");
notification.id = `notification`;
gameBox.appendChild(notification);

const boxes = Math.ceil(Math.random() * 10);
const gameTime = 5000;

startButton.addEventListener("click", startGame);

let clickedState = [];

function startGame() {
  startButton.remove();

  for (let i = 1; i <= boxes; i++) {
    const button = document.createElement("button");
    button.id = `button-${i}`;
    button.innerText = i;

    button.style.left = `${Math.random() * 500}px`;
    button.style.top = `${Math.random() * 300}px`;

    gameBox.appendChild(button);

    button.addEventListener("click", changeColor);

    clickedState.push(false);
  }
  //timer

  timer.innerText = gameTime / 1000;
  let seconds = gameTime - 1000;
  const countdown = setInterval(function () {
    if (seconds < 1) {
      clearInterval(countdown);
      endGame();
    }
    timer.innerText = seconds / 1000;
    seconds -= 1000;
  }, 1000);

  const buttonStatus = setInterval(function () {
    if (checkArray(clickedState)) {
      timer.innerText = 0;
      endGame();
      clearInterval(buttonStatus);
    }
  }, 400);
}

function changeColor(event) {
  console.log("works");
  const buttonId = event.target.id;
  document.getElementById(buttonId).classList.add(`green`);

  const id = buttonId.split("-")[1];
  clickedState[id] = !clickedState[id];
}

function checkArray(arr) {
  let arrayChecker = [];
  arr.forEach((item) => {
    arrayChecker.push(item);
  });

  console.log(arrayChecker);
  return arrayChecker;
}

function endGame() {
  notification.style.paddingTop = `74px`;
  notification.style.paddingBottom = `124px`;

  if (checkArray(clickedState)) {
    notification.innerText = `You Win!!!`;
    notification.style.background = `green`;
  } else {
    notification.innerText = `You Lose...`;
    notification.style.background = `red`;
  }
}
