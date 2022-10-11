const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', function(params) {gameWithUI('rock')});
paper.addEventListener('click', function(params) {gameWithUI('paper')});
scissors.addEventListener('click', function(params) {gameWithUI('scissors')});

const roundText = document.querySelector('.round');

function gameWithUI(playerPick) {
    let computerChoice = getComputerChoice()
    result = playRound(playerPick, computerChoice);
    roundText.textContent = `Computer picked ${computerChoice}, you picked ${playerPick}. ${result}`;
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



function game(rounds) {
    //get user input using prompt()
    //print results of that round
    //repeat, new round, new input, new result
    //once all rounds done, print score, computer = x wins, user = y wins, computer/user won.

    let playerScore = 0;

    for (let i = 0; i < rounds; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?");
        // uncomment this once checkPlayerInput() is fixed.
        // playerSelection = checkPlayerInput(playerSelection);

        const computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        
        console.log(`Computer chose ${computerSelection}. ${roundResult}`);

        if (roundResult == 'You won!') {
            playerScore++;
        }
        
    }
    console.log(`Your score: you won ${playerScore} times out of ${rounds} rounds.`)
}



// game(5);