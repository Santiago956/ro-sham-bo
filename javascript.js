let humanScore = 0;
let computerScore = 0;
let i = 0;
function getComputerChoice() {
  let num = Math.random();
  let sign;
  if (num < 0.33) {
    sign = "rock";
  } else if (num >= 0.33 && num < 0.66) {
    sign = "paper";
  } else {
    sign = "scissors";
  }
  return sign;
}

function round(pchoice) {
  finalScore.innerHTML = "";
  let message = "";
  let hChoice = pchoice.target.innerText.toLowerCase();
  let cChoice = getComputerChoice();

  if (hChoice === cChoice) {
    console.log("Tie!");
    message = "Tie!";
  } else if (
    (hChoice === "rock" && cChoice === "scissors") ||
    (hChoice === "scissors" && cChoice === "paper") ||
    (hChoice === "paper" && cChoice === "rock")
  ) {
    humanScore += 1;
    console.log(`${hChoice} beats ${cChoice}, you win!`);
    message = `${hChoice} beats ${cChoice}, you win!`;
  } else {
    computerScore += 1;
    console.log(`${cChoice} beats ${hChoice}, you lose!`);
    message = `${cChoice} beats ${hChoice}, you lose!`;
  }
  i += 1;
  document.getElementById("result").textContent = message;

  if (i === 5) {
    if (humanScore > computerScore) {
      finalScore.innerHTML = `Player: ${humanScore} Computer: ${computerScore}<br> 
      Congratulations, you won the match!`;
    } else if (humanScore < computerScore) {
      finalScore.innerHTML = `Player: ${humanScore} Computer: ${computerScore}<br>  
      Too bad, you lost the match!`;
    } else {
      finalScore.innerHTML = `Player: ${humanScore} Computer: ${computerScore}<br>  
      It's a tie!`;
    }
    humanScore = 0;
    computerScore = 0;
    i = 0;
  }
}
