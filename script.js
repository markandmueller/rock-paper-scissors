<<<<<<< Updated upstream
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
=======
// [] create a Rock, Paper, Scissors game in the browser console that:

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

// [] write a function that plays a single round of Rock Paper Scissors
// [] at end of round, return a string that declares the winner of the round
// [] like this: "You lose! Paper beats Rock"
// [] want to return the results of this function call and not console.log() them 
// [] because we're going to use the return values later on

// function areDifferent(playerSelection, computerSelection) {
//     if (playerSelection !== computerSelection) {
//         // console.log('look, we are different');
//         return 'look, we are DIFFERENT';
//     } if (playerSelection == computerSelection) {
//         // console.log('look, we are the SAME');
//         return 'look, we are the SAME';
//     }
// } console.log(areDifferent(playerSelection, computerSelection));

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return 'You Win! Rock beats Scissors.';
    } if (playerSelection == "rock" && computerSelection == "paper") {
        return 'You Lose! Paper beats Rock.';
    } if (playerSelection == "paper" && computerSelection == "rock") {
        return 'You Win! Paper beats Rock.';
    } if (playerSelection == "paper" && computerSelection == "scissors") {
        return 'You Lose! Scissors beats Paper.';
    } if (playerSelection == "scissors" && computerSelection == "paper") {
        return 'You Win! Scissors beats Paper.';
    } if (playerSelection == "scissors" && computerSelection == "rock") {
        return 'You Lose! Scissors beats Rock.';
    } if (playerSelection == computerSelection) {
        return 'It is a TIE!';
    }
}
console.log(playRound(playerSelection, computerSelection));
>>>>>>> Stashed changes


<<<<<<< Updated upstream




=======
// [] write a new function called game()
//         [] call the playRound function inside of this to play a 5 round game that
//             [] keeps score and reports a winner or loser at the end //
>>>>>>> Stashed changes
