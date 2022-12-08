let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
const p1ScoreHolder = document.querySelector('#p1Score');
const compScoreHolder = document.querySelector('#compScore');
const compChoiceDisplay = document.querySelector('#compChoiceDisplay');
const roundMessage = document.querySelector('#roundMessage');
const resetBtnContainer = document.querySelector('#resetBtnContainer');
const resetButton = document.querySelector('#reset');
resetButton.remove();

// Player 1 RPS buttons logic
const btnContainer = document.querySelector('#rpsButtonsContainer');
const rpsButtons = btnContainer.querySelectorAll('button');
rpsButtons.forEach((button) => {
    button.addEventListener('click', function () {
        playerSelection = button.value;
        game();
    });
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
    compChoiceDisplay.innerText = computerSelection;
    if (playerSelection == computerSelection) {
        drawScore = drawScore += 1;
        roundMessage.innerText = `You both chose ${playerSelection}`;
        isGameOver();
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore = playerScore += 1;
        p1ScoreHolder.innerText = playerScore;
        roundMessage.innerText = `${playerSelection} beats ${computerSelection}.`;
        isGameOver();
    } else {
        computerScore = computerScore += 1;
        compScoreHolder.innerText = computerScore;
        roundMessage.innerText = `${computerSelection} beats ${playerSelection}.`;
        isGameOver();
    }
}

function isGameOver() {
    if ((playerScore === 3) || (computerScore === 3)) {
        matchOverMsg();
    }
}

// add function to disable buttons when Match is Over
function matchOverMsg() {
    const matchWinner = document.querySelector('#matchWinner');
    rpsButtons.forEach((button) => {
        button.disabled = true;
    });
    showResetButton();
    if (playerScore > computerScore) {
        matchWinner.innerText = "You WON the match!";
    } else (playerScore < computerScore)
    matchWinner.innerText = "You LOST the match!";
}

function showResetButton() {
    resetBtnContainer.appendChild(resetButton);
    resetButton.addEventListener('click', playAgain);
}

function playAgain() {
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;
    resetButton.remove();
    rpsButtons.forEach((button) => {
        button.disabled = false;
    });
    matchWinner.innerText = "Let's play again.";
    p1ScoreHolder.innerText = playerScore;
    compScoreHolder.innerText = computerScore;
    compChoiceDisplay.innerText = "";
    roundMessage.innerText = "";
}