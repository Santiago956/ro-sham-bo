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