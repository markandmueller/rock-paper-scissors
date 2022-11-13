// [] create a Rock, Paper, Scissors game in the browser console

// [x] generates a random computer selection of rock, paper, or scissors
let choicesArray = ['rock', 'paper', 'scissors'];
function getComputerChoice(choicesArray) {
    return choicesArray[Math.floor(Math.random() * choicesArray.length)];
}
const computerSelection = getComputerChoice(choicesArray);

// [x] prompts the user for their Selection of rock, paper, or scissors
const playerSelection = "rock";
// let playerInput = prompt('Type in rock, paper, or scissors');
// const playerSelection = playerInput.toLowerCase();

// starting score
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
console.log("Player Score:", playerScore);
console.log("Computer Score:", computerScore);
console.log("Ties:", drawScore);

// player and computer selections
console.log("Player Selection:", playerSelection);
console.log("Computer Selection:", computerSelection);

// [x] write a function that plays a single round of Rock Paper Scissors
// improved playRound to have 4 statements for if tie, if win, if lose, if else
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        drawScore = drawScore += 1;
        return 'It is a TIE!';
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore = playerScore += 1;
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")) {
        computerScore = computerScore += 1;
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    } else { return 'Whoops! Something is most definitely wrong.' }
}
console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {
        // your code here!
    }
}


// new scores
console.log("New Player Score:", playerScore);
console.log("New Computer Score:", computerScore);
console.log("New Ties:", drawScore);

