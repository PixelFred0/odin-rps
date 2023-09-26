    var playerScore = 0
    var computerScore = 0
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randNumber = Math.floor(Math.random() * 3);
    return choices[randNumber];
}
function gameState(playerCounter, computerCounter) {
    console.log("gamestate")
    if (playerCounter === 5) {
        document.getElementById("gameState").innerHTML = `The Winner is the Player`;
    } else if (computerCounter === 5) {
        document.getElementById("gameState").innerHTML = `The Winner is the Computer`;
    }
}

function singleGame(playerSelection) {
    let lowerPlayerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(lowerPlayerSelection);
    if (lowerPlayerSelection == "rock") {
        if (computerSelection == "Rock") {
            document.getElementById("winnerSingleRound").innerHTML = `Its a draw!`;
        } else if (computerSelection == "Paper") {
            computerScore += 1
            document.getElementById("computerCounter").innerHTML = `Computer Counter: ${computerScore}`;
            document.getElementById("winnerSingleRound").innerHTML = `You Lose! Paper beats Rock`;
        } else {
            playerScore += 1
            document.getElementById("playerCounter").innerHTML = `Player Counter: ${playerScore}`;
            document.getElementById("winnerSingleRound").innerHTML = `You Win! Rock beats Scissors`;
        };
    } else if (lowerPlayerSelection == "paper") {
        if (computerSelection == "Rock") {
            playerScore += 1
            document.getElementById("playerCounter").innerHTML = `Player Counter: ${playerScore}`;
            document.getElementById("winnerSingleRound").innerHTML = `You Win! Paper beats Rock`;
        } else if (computerSelection == "Paper") {
            document.getElementById("winnerSingleRound").innerHTML = `Its a draw!`;
        } else {
            computerScore += 1
            document.getElementById("computerCounter").innerHTML = `Computer Counter: ${computerScore}`;
            document.getElementById("winnerSingleRound").innerHTML = `You Lose! Scissors beats Paper`;
        };
    } else if (lowerPlayerSelection == "scissors"){
        if (computerSelection == "Rock") {
            computerScore +=1
            document.getElementById("computerCounter").innerHTML = `Computer Counter: ${computerScore}`;
            document.getElementById("winnerSingleRound").innerHTML = `You Lose! Rock beats Scissors`;
        } else if (computerSelection == "Paper") {
            playerScore += 1
            document.getElementById("playerCounter").innerHTML = `Player Counter: ${playerScore}`;
            document.getElementById("winnerSingleRound").innerHTML = `You Win! Scissors beats Paper`;
        } else {
            document.getElementById("winnerSingleRound").innerHTML = `Its a draw!`;
        };
    }; 
    gameState(playerScore,computerScore);
}



