function getComputerChoice() {
    const list = ['rock', 'paper', 'scissors']
    return list[Math.floor(Math.random()*list.length)];
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection === playerSelection) {
        return "It's a tie!";
    }

    else if (computerSelection === 'rock' && playerSelection === 'paper') {
        return "You Win! paper beats rock";
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return "You Lose! paper beats rock";
    }

    else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        return "You Win! scissors beats paper";
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return "You Lose! scissors beats paper";
    }

    else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        return "You Win! rock beats scissors";
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        return "You Lose! rock beats scissors";
    }
}

const playerSelection = 'paper';
const computerSelection = getComputerChoice();

console.log('Computer choice:', computerSelection)
console.log('Your choice:', playerSelection)
console.log(playRound(playerSelection, computerSelection))