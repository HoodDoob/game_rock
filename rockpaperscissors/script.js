start_game();

let player, siri;
let rock, paper, scissors;

function start_game() {
  console.log("the game started");
  document.querySelector(".rock").addEventListener("click", assignRock);
  document.querySelector(".paper").addEventListener("click", assignPaper);
  document.querySelector(".scissors").addEventListener("click", assignScissors);
}

function assignPaper() {
  rollDice();
  restartGame();
  // document.querySelector("#player1").classList.value = "player";
  // document.querySelector("#player2").classList.value = "player";
  player = "paper";
  console.log("hubert is " + player);
  shakeDaBooty();
}
function assignRock() {
  // document.querySelector("#player1").classList.value = "player";
  // document.querySelector("#player2").classList.value = "player";
  restartGame();
  player = "rock";
  console.log("hubert is " + player);
  rollDice();
  shakeDaBooty();
}
function assignScissors() {
  // document.querySelector("#player1").classList.value = "player";
  // document.querySelector("#player2").classList.value = "player";
  restartGame();
  player = "scissors";
  console.log("hubert is " + player);
  rollDice();
  shakeDaBooty();
}
function restartGame() {
  console.log("restarting game");
  document.querySelector("#player1").classList.value = "player";
  document.querySelector("#player2").classList.value = "player";
  document.querySelector("#texts #lose").classList.value = "hidden";
  document.querySelector("#texts #win").classList.value = "hidden";
  document.querySelector("#texts #draw").classList.value = "hidden";
}

function shakeDaBooty() {
  document.querySelector("#player1").classList.value = "player";
  document.querySelector("#player2").classList.value = "player";
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
  document
    .querySelector("#player1")
    .addEventListener("animationend", calculateWinner);
}

function rollDice() {
  var choice = Math.random();
  if (choice <= 0.34) {
    siri = "rock";
  } else if (choice <= 0.67) {
    siri = "paper";
  } else {
    siri = "scissors";
  }
  console.log("siri is " + siri);
}

function calculateWinner() {
  if (siri === player) {
    setTimeout(setDraw);
  } else if (player == "paper") {
    if (siri == "scissors") {
      setTimeout(setLoose);
    } else if (siri == "rock") {
      setTimeout(setWin);
    }
  } else if (player == "rock") {
    if (siri == "paper") {
      setTimeout(setLoose);
    } else if (siri == "scissors") {
      setTimeout(setWin);
    }
  } else if (player == "scissors") {
    if (siri == "rock") {
      setTimeout(setLoose);
    } else if (siri == "paper") {
      setTimeout(setWin);
    }
  }
  changeHands();
}
function changeHands() {
  console.log("changing hands");
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player2").classList.remove("shake");

  if (player == "scissors") {
    document.querySelector("#player1").classList.add("scissors");
  } else if (player == "paper") {
    document.querySelector("#player1").classList.add("paper");
  }
  if (siri == "scissors") {
    document.querySelector("#player2").classList.add("scissors");
  } else if (siri == "paper") {
    document.querySelector("#player2").classList.add("paper");
  }
}

function setWin() {
  document.querySelector(" #texts #win").classList.remove("hidden");
  console.log("u win");
}
function setLoose() {
  console.log("u loose");
  document.querySelector("#texts #lose").classList.remove("hidden");
}
function setDraw() {
  console.log("u draw");
  document.querySelector("#texts #draw").classList.remove("hidden");
}
