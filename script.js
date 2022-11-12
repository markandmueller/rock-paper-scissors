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

console.log("Player Selection:", playerSelection);
console.log("Computer Selection:", computerSelection);

// [x] write a function that plays a single round of Rock Paper Scissors
// improve playRound to have 4 statements for if tie, if win, if lose, if else
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'It is a TIE!';
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")) {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    } else { return 'Whoops! Something is most definitely wrong.' }
}

console.log(playRound(playerSelection, computerSelection));

// let playerScore = 0;
// let computerScore = 0;
// let score = (playerScore, computerScore);

// // [] write a new function called game()
// // function game() {
// //     for (let i = 0; i < 5; i++) {
// //         playRound(playerSelection, computerSelection);
// //         return playRound(playerSelection, computerSelection);
// //     }
// // }
// // call the playRound function inside of this to play a 5 round game that
// // keeps score and reports a winner or loser at the end

// // console.log(game);
// console.log("Computer Score:", computerScore);
// console.log("Player Score:", playerScore);
// console.log("Total Score:", score);