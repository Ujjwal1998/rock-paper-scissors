console.log("first");
function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  let random = Math.random() * 3;
  let random_floor = Math.floor(random);
  console.log(random, random_floor);
  return choices[random_floor];
}
function playRound(userChoice1, computerChoice) {
  let userChoice = userChoice1.toUpperCase();
  if (userChoice == computerChoice) return "The game is a tie!";
  if (userChoice == "ROCK") {
    if (computerChoice == "PAPER") {
      return "Paper defeats rock, Computer wins !";
    }
    if (computerChoice == "SCISSORS") {
      return "Rock defeats scissors, Player wins !";
    }
  }
  if (userChoice == "PAPER") {
    if (computerChoice == "ROCK") {
      return "Paper defeats rock, Player wins !";
    }
    if (computerChoice == "SCISSORS") {
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
let computerScore = 0;
let playerScore = 0;
for (let i = 0; i < 5; i++) {
  let input = prompt("Enter your choice ");
  const computerChoice = getComputerChoice();
  const res = playRound(input, computerChoice);

  if (res.includes("Computer wins !")) {
    computerScore++;
    alert(`Computer = ${computerScore}, Sayji = ${playerScore}`);
  } else if (res.includes("Player wins !")) {
    playerScore++;
    alert(`Computer = ${computerScore}, Sayji = ${playerScore}`);
  } else {
    alert(res);
  }
  if (i == 4) {
    alert("SAYJPIII WIIIIN");
  }
}
