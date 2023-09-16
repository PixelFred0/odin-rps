    var playerScore = 0
    var computerScore = 0
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
            computerScore += 1
            return "You Lose! Paper beats Rock"
        } else {
            playerScore += 1
            return "You Win! Rock beats Scissors"
        };
    } else if (lowerPlayerSelection == "paper") {
        if (computerSelection == "Rock") {
            playerScore += 1
            return "You Win! Paper beats Rock"
        } else if (computerSelection == "Paper") {
            return "Its a draw!"
        } else {
            computerScore += 1
            return "You Lose! Scissors beats Paper"
        };
    } else {
        if (computerSelection == "Rock") {
            computerScore += 1
            return "You Lose! Rock beats Scissors"
        } else if (computerSelection == "Paper") {
            playerScore += 1
            return "You Win! Scissors beats Paper"
        } else {
            return "Its a draw!"
        };
    };
}

function game() {
    let playerSelection = prompt("Your Choice: ")
    console.log(singleGame(playerSelection, getComputerChoice()))
    playerSelection = prompt("Your Choice: ")
    console.log(singleGame(playerSelection, getComputerChoice()))
    playerSelection = prompt("Your Choice: ")
    console.log(singleGame(playerSelection, getComputerChoice()))
    playerSelection = prompt("Your Choice: ")
    console.log(singleGame(playerSelection, getComputerChoice()))
    playerSelection = prompt("Your Choice: ")
    console.log(singleGame(playerSelection, getComputerChoice()))
    if (playerScore > computerScore) {
        console.log("You Won! Your Score is ", playerScore)
    } else {
        console.log("You Lost! Your Score is ", playerScore)
    }
}

game()
