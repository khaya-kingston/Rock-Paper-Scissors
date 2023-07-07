
// Access the round, score, and comp score on the scoreboard
let score = document.querySelector('.score-box .score');
let compScore = document.querySelector('.score-box .computer');
let screenPut = document.querySelector('#screen');


// Generate local variables to keep track and update the screen
let localPlayerScore = 0;
let computerScore = 0;


// Possible Moves
const moves = ["Rock", "Paper", "Scissors"];

// Generate a computer move
function getComputerChoice() {
    return moves[Math.floor(Math.random()*moves.length)];
}


// Update the scoreboard given a current play
function update(outCome) {
    
    switch (outCome){

        case "Lose":
            computerScore++;
            compScore.textContent = computerScore.toString();
            break;

        case "Win":
            localPlayerScore++;
            score.textContent = localPlayerScore.toString();
            break;

        default:
            break;
    }
}


function endGame() {
    if (localPlayerScore === computerScore) {
        screenPut.textContent = "You Tied";
    } else if (localPlayerScore < computerScore) {
        screenPut.textContent = "You Lost to a Computer";
    } else {
        screenPut.textContent = "You WIN!!!!";
    }
}

function playRound(playerMove) {
    
    let computerMove = getComputerChoice();

    if (playerMove === computerMove) {
        update("Tie");
    }

    if ((playerMove === "Rock" && computerMove === "Scissors") ||
    (playerMove === "Paper" && computerMove === "Rock") ||
    (playerMove == "Scissors" && computerMove === "Paper")) {
        update("Win");
    }
    else {
        update("Lose");
    }

    if (localPlayerScore === 5) {
        endGame();
    }
}


// Access all buttons on the screen and assign the play for a click
let buttons = document.querySelectorAll('.big-button');
// assign a listener to play a round on each click
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        playRound(button.id);
    });
});