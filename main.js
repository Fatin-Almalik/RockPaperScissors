const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

//add a button to reset playerScore and computerScore? To reset the game.
let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', function() {gameWithUI('rock')});
paper.addEventListener('click', function() {gameWithUI('paper')});
scissors.addEventListener('click', function() {gameWithUI('scissors')});

const roundText = document.querySelector('.round');
const winnerText = document.querySelector('.winner_announcement');
const scoreText = document.querySelector('.scores');


function gameWithUI(playerPick) {
    let computerChoice = getComputerChoice()
    result = playRound(playerPick, computerChoice);
    roundText.textContent = `Computer picked ${computerChoice}, you picked ${playerPick}. ${result}`;
    
    keepingScores(result); //this is not written well, keepingScores() does more than just keeping scores.. refine this
    scoreText.textContent = `You: ${playerScore}, computer: ${computerScore}`;
    
}

function keepingScores(roundResult) {
    if (roundResult == 'You won!') {
        playerScore++;
    } else if (roundResult == 'You lost.') {
        computerScore++;
    }
    if (playerScore === 5) {
        winnerText.textContent = "You've won 5 rounds! You won this game!"
    }
    if (computerScore === 5) {
        winnerText.textContent = "The computer won 5 rounds! You lost this game!"
    }
}

function getComputerChoice() {
    const list = ['rock', 'paper', 'scissors']
    return list[Math.floor(Math.random()*list.length)];
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection === playerSelection) {
        return "It's a tie.";
    }

    else if (computerSelection === 'rock' && playerSelection === 'paper') {
        return "You won!";
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return "You lost.";
    }

    else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        return "You won!";
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return "You lost.";
    }

    else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        return "You won!";
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        return "You lost.";
    }
}