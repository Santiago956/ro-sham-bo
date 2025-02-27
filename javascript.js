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