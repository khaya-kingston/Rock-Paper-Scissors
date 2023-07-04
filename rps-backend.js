

let computerMove;

let playerMove = "r0ck";

let score = 0;


const moves = ["Rock", "Paper", "Scissors"];

function moveCleaner(move) {
    if (typeof move != "string") {
        move = "";
    } else {
        move = move.charAt(0).toUpperCase() + move.slice(1).toLowerCase();
    }
    return move;
}



function getComputerChoice() {
    return moves[Math.floor(Math.random()*moves.length)];
}


function playRound(computerMove, playerMove) {
    
    playerMove = moveCleaner(playerMove);

    if (!moves.includes(playerMove)) {
        return "You Lose! You didn't play a valid move";
    }
    
    if (playerMove === computerMove) {
        return "Tie!"
    }

    if ((playerMove === "Rock" && computerMove === "Scissors") ||
    (playerMove === "Paper" && computerMove === "Rock") ||
    (playerMove == "Scissors" && computerMove === "Paper")) {
        score++;
        return "You Win! ".concat(playerMove, " beats ", computerMove);
    }
    else {
        return "You Lose! ".concat(computerMove, " beats ", playerMove);
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        playerMove = prompt("What is your move?", "Ex: Rock");
        computerMove = getComputerChoice();
        console.log(playRound(computerMove, playerMove));
        console.log(score);
    }
    if (score > 2) {
        console.log("You Beat the Computer!");
    } else {
        console.log("You Lost You Moron.");
    }
}

game();