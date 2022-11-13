// starting score
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
// console.log("Player Score:", playerScore);
// console.log("Computer Score:", computerScore);
// console.log("Ties:", drawScore);

// function that plays a single round of Rock Paper Scissors
// improved to have 4 statements for if tie, if win, if lose, if else
// improved to have score increments
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
// console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {
        // let playerInput = prompt('Type in rock, paper, or scissors');
        // const playerSelection = playerInput.toLowerCase();
        const playerSelection = "rock";

        // computer random choice selection
        let choicesArray = ['rock', 'paper', 'scissors'];
        function getComputerChoice(choicesArray) {
            return choicesArray[Math.floor(Math.random() * choicesArray.length)];
        }
        const computerSelection = getComputerChoice(choicesArray);

        console.log(playRound(playerSelection, computerSelection));
    } // end of for loop
    // we have scores, now we want to add logic to declare a winner
    if (playerScore > computerScore) {
        console.log("You WON the match!");
    } else if (playerScore < computerScore) {
        console.log("You LOST the match!");
    } else console.log("You TIED.");
}

game();

// updated scores
console.log("Rounds Won:", playerScore);
console.log("Rounds Lost:", computerScore);
console.log("Rounds Tied:", drawScore);

