let choicesArray = ['rock', 'paper', 'scissors'];
let randomComputerChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];

const playerSelection = "pickle";
const computerSelection = randomComputerChoice;

function playRound(playerSelection, computerSelection) {
    if (playerSelection !== computerSelection) {
        console.log('definitely not a tie, the selections were different');
    }
}

playRound(playerSelection, computerSelection);
// console.log(playRound(playerSelection, computerSelection));





