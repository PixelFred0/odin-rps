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
        document.getElementById("winner").innerHTML = `The Winner is the Player`;
    } else if (computerCounter === 5) {
        document.getElementById("winner").innerHTML = `The Winner is the Computer`;
    }
}

function singleGame(playerSelection) {
    let lowerPlayerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(lowerPlayerSelection);
    if (lowerPlayerSelection == "rock") {
        if (computerSelection == "Rock") {
            console.log("Its a draw!")
        } else if (computerSelection == "Paper") {
            computerScore += 1
            document.getElementById("computerCounter").innerHTML = `Computer Counter: ${computerScore}`;
            console.log("You Lose! Paper beats Rock")
        } else {
            playerScore += 1
            document.getElementById("playerCounter").innerHTML = `Player Counter: ${playerScore}`;
            console.log("You Win! Rock beats Scissors")
        };
    } else if (lowerPlayerSelection == "paper") {
        if (computerSelection == "Rock") {
            playerScore += 1
            document.getElementById("playerCounter").innerHTML = `Player Counter: ${playerScore}`;
            console.log("You Win! Paper beats Rock")
        } else if (computerSelection == "Paper") {
            console.log("Its a draw!")
        } else {
            computerScore += 1
            document.getElementById("computerCounter").innerHTML = `Computer Counter: ${computerScore}`;
            console.log("You Lose! Scissors beats Paper")
        };
    } else if (lowerPlayerSelection == "scissors"){
        if (computerSelection == "Rock") {
            computerScore +=1
            document.getElementById("computerCounter").innerHTML = `Computer Counter: ${computerScore}`;
            console.log("You Lose! Rock beats Scissors")
        } else if (computerSelection == "Paper") {
            playerScore += 1
            document.getElementById("playerCounter").innerHTML = `Player Counter: ${playerScore}`;
            console.log("You Win! Scissors beats Paper")
        } else {
            console.log("Its a draw!")
        };
    }; 
    gameState(playerScore,computerScore);
}



