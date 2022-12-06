let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let playerSelection = undefined;

const p1ScoreHolder = document.querySelector('#p1Score');
const compScoreHolder = document.querySelector('#compScore');
const compChoiceDisplay = document.querySelector('#compChoiceDisplay');
let roundMessage = document.querySelector('#roundMessage');

const rock = document.querySelector('#rock');
rock.addEventListener('click', e => {
    playerSelection = rock.value;
    game();
    // playRound(playerSelection, computerSelection);
})
const paper = document.querySelector('#paper');
paper.addEventListener('click', e => {
    playerSelection = paper.value;
    game();
})
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', e => {
    playerSelection = scissors.value;
    game();
})

function game() {
    let choicesArray = ['rock', 'paper', 'scissors'];
    function getComputerChoice(choicesArray) {
        return choicesArray[Math.floor(Math.random() * choicesArray.length)];
    }
    let computerSelection = getComputerChoice(choicesArray);
    playRound(playerSelection, computerSelection);
}

function playRound(playerSelection, computerSelection) {
    roundMessage.innerText = 'we played a round';
    compChoiceDisplay.innerText = computerSelection;
    if (playerSelection == computerSelection) {
        drawScore = drawScore += 1;
        console.log('It is a TIE!');
        gameOver();
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore = playerScore += 1;
        p1ScoreHolder.innerText = playerScore;
        console.log(`${playerSelection} beats ${computerSelection}.`);
        gameOver();
    } else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")) {
        computerScore = computerScore += 1;
        compScoreHolder.innerText = computerScore;
        console.log(`${computerSelection} beats ${playerSelection}.`);
        gameOver();
    } else if (
        (playerSelection !== "rock" || "paper" || "scissors")) {
        console.log('Try choosing rock, paper, or scissors.');
        gameOver();
    } else {
        console.log('Whoops! Something is most definitely wrong.');
        gameOver();
    }
}

function gameOver() {
    // consider adding a dropdown for PLAY TO #?
    if ((playerScore === 5) || (computerScore === 5)) {
        if (playerScore > computerScore) {
            console.log("You WON the match!");
        } else if (playerScore < computerScore) {
            console.log("You LOST the match!");
        } else console.log("You TIED.");
    }
}