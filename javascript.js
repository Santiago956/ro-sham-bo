let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.random();
    let sign;
    if (num < 0.33) {
        sign = 'rock';
    }
    else if (num >= 0.33 && num < 0.66) {
        sign = 'paper';
    }
    else {
        sign = 'scissors';
    }
    return sign;
}

function getHumanChoice() {
    let hSign = '';
    while (!(hSign === 'rock' || hSign === 'paper' || hSign === 'scissors')) {
        hSign = prompt('Rock, paper or scissors?');
        hSign = hSign.toLowerCase();
    }
    return hSign;
    

}

function round (humanChoice, computerChoice) {

    let hChoice = getHumanChoice();
    let cChoice = getComputerChoice();
    
    if (hChoice === cChoice) {
        return 'Tie!'
    }
    else if (
    (hChoice === 'rock' && cChoice === 'scissors') || 
    (hChoice === 'scissors' && cChoice === 'paper') || 
    (hChoice === 'paper' && cChoice === 'rock')) 
    {
        humanScore += 1
        return `${hChoice} beats ${cChoice}, you win!`
        
    }
    else {
        computerScore += 1
        return `${cChoice} beats ${hChoice}, you lose!`
    }

}