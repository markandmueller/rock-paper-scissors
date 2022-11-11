let choicesArray = ['rock', 'paper', 'scissors'];
let randomComputerChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
let playerInput = prompt('Type in rock, paper, or scissors');

// const playerSelection = "rock";
const playerSelection = playerInput.toLowerCase();
const computerSelection = randomComputerChoice;

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log('Player Wins');
    } if (playerSelection == "rock" && computerSelection == "paper") {
        console.log('Player Lost');

    } if (playerSelection == "paper" && computerSelection == "rock") {
        console.log('Player Wins');
    } if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log('Player Lost');

    } if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log('Player Wins');
    } if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log('Player Lost');
    }

    else if (playerSelection == computerSelection) {
        console.log('Tie Game');
    }
}

playRound(playerSelection, computerSelection);

console.log("Player Selected:", playerSelection);
console.log("Computer Selected:", computerSelection);

// console.log(playRound(playerSelection, computerSelection));





