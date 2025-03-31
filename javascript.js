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

function playGame(pchoice) {
  let humanScore = 0;
  let computerScore = 0;
  let i = 1;
  function round() {
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

    document.getElementById("result").textContent = message;
  }
  round();
  /* while (i < 5) {
    i += 1;
    round();
  }
  if (humanScore > computerScore) {
    return "Congratulations, you won the match!";
  } else if (humanScore < computerScore) {
    return "Too bad, you lost the match!";
  } else {
    return "It's a tie!";
  } */
}
