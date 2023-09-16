function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randNumber = Math.floor(Math.random() * 3);
    return choices[randNumber];
}

function singleGame(playerSelection, computerSelection) {
    let lowerPlayerSelection = playerSelection.toLowerCase();
    if (lowerPlayerSelection == "rock") {
        if (computerSelection == "Rock") {
            return "Its a draw!"
        } else if (computerSelection == "Paper") {
            return "You Lose! Paper beats Rock"
        } else {
            return "You Win! Rock beats Scissors"
        };
    } else if (lowerPlayerSelection == "paper") {
        if (computerSelection == "Rock") {
            return "You Win! Paper beats Rock"
        } else if (computerSelection == "Paper") {
            return "Its a draw!"
        } else {
            return "You Lose! Scissors beats Paper"
        };
    } else {
        if (computerSelection == "Rock") {
            return "You Lose! Rock beats Scissors"
        } else if (computerSelection == "Paper") {
            return "You Win! Scissors beats Paper"
        } else {
            return "Its a draw!"
        };
    };
}


const playerSelection = "Scissors"
const computerSelection = getComputerChoice();
console.log(singleGame(playerSelection,computerSelection))