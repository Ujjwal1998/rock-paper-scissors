console.log("first");
function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  let random = Math.random() * 3;
  let random_floor = Math.floor(random);
  console.log(random, random_floor);
  return choices[random_floor];
}
let rockSelector = document.getElementById("button__rock");
let paperSelector = document.getElementById("button__paper");
let scissorsSelector = document.getElementById("button__scissors");
let finalResultSelector = document.getElementById("result__final");
let rockComputerSelector = document.getElementById("computer__button__rock");
let paperComputerSelector = document.getElementById("computer__button__paper");
let scissorsComputerSelector = document.getElementById(
  "computer__button__scissors"
);
let playAgainSelector = document.getElementById("play_again_button");
let resultSelector = document.getElementById("result__text");
let playerScoreSelector = document.getElementById("playerScore");
let computerScoreSelector = document.getElementById("computerScore");
console.log(resultSelector, playerScoreSelector, computerScoreSelector);
// let computerTurnsSelector = document.getElementById("div__computerTurns");
let computerScore = 0;
let playerScore = 0;
let computerTurns = [];
let playerTurns = [];
function restartGameHandler() {
  computerScore = 0;
  playerScore = 0;
  rockSelector.disabled = false;
  paperSelector.disabled = false;
  scissorsSelector.disabled = false;
  playerScoreSelector.innerText = 0;
  computerScoreSelector.innerText = 0;
  rockSelector.style.background = null;
  paperSelector.style.background = null;
  scissorsSelector.style.background = null;
  rockComputerSelector.style.background = null;
  paperComputerSelector.style.background = null;
  scissorsComputerSelector.style.background = null;
  playAgainSelector.style.display = "none";
  resultSelector.style.display = "none";
  finalResultSelector.style.display = "none";
}
console.log(rockSelector, paperSelector, scissorsSelector);
rockSelector.addEventListener("click", () => handleClick("ROCK"));
paperSelector.addEventListener("click", () => handleClick("PAPER"));
scissorsSelector.addEventListener("click", () => handleClick("SCISSORS"));
playAgainSelector.addEventListener("click", () => restartGameHandler());
function handleClick(choice) {
  const computerChoice = getComputerChoice();
  computerTurns.push(computerChoice);
  const res = playRound(choice, computerChoice);
  if (res.includes("Computer wins !")) {
    computerScore++;
    // alert(`Computer = ${computerScore}, Sayji = ${playerScore}`);
  } else if (res.includes("Player wins !")) {
    playerScore++;
    // alert(`Computer = ${computerScore}, Sayji = ${playerScore}`);
  }
  resultSelector.innerText = res;
  console.log(playerScoreSelector, computerScoreSelector);
  playerScoreSelector.innerText = playerScore;
  computerScoreSelector.innerText = computerScore;
  finalResultSelector.style.display = "block";
  resultSelector.style.display = "block";

  // computerTurnsSelector.innerText = computerTurns;
  if (playerScore + computerScore === 5) {
    rockSelector.disabled = true;
    paperSelector.disabled = true;
    scissorsSelector.disabled = true;
    rockSelector.style.background = "grey";
    paperSelector.style.background = "grey";
    scissorsSelector.style.background = "grey";
    rockComputerSelector.style.background = "grey";
    paperComputerSelector.style.background = "grey";
    scissorsComputerSelector.style.background = "grey";
    playAgainSelector.style.display = "inline";
    if (playerScore > computerScore) {
      finalResultSelector.innerText = "Player wins the best of 5!";
    } else {
      finalResultSelector.innerText = "Computer wins the best of 5!";
    }
  }
}
function changeButtonColor(selector) {
  if (selector.disabled != true) selector.style.background = "red";
  // setTimeout(() => (selector.style.background = "grey"), 250);
  setTimeout(() => (selector.style.background = null), 250);
}
function playRound(userChoice, computerChoice) {
  console.log("jlkjlk", userChoice, computerChoice);
  if (computerChoice == "PAPER") {
    changeButtonColor(paperComputerSelector);
  } else if (computerChoice == "ROCK") {
    changeButtonColor(rockComputerSelector);
  } else {
    changeButtonColor(scissorsComputerSelector);
  }
  if (userChoice == computerChoice) return "The game is a tie!";
  if (userChoice == "ROCK") {
    if (computerChoice == "PAPER") {
      return "Paper defeats rock, Computer wins !";
    }
    if (computerChoice == "SCISSORS") {
      // changeButtonColor(scissorsComputerSelector);
      return "Rock defeats scissors, Player wins !";
    }
  }
  if (userChoice == "PAPER") {
    if (computerChoice == "ROCK") {
      return "Paper defeats rock, Player wins !";
    }
    if (computerChoice == "SCISSORS") {
      changeButtonColor(scissorsComputerSelector);
      return "Scissors defeat paper, Computer wins !";
    }
  }
  if (userChoice == "SCISSORS") {
    if (computerChoice == "ROCK") {
      return "Rock defeats scissors, Computer wins !";
    }
    if (computerChoice == "PAPER") {
      return "Scissors defeats Paper, Player wins !";
    }
  }
}
