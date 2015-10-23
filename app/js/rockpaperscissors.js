////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var move;
var playerMove;
var computerMove;
var playerWins;
var computerWins;


function getPlayerMove(move) {
    return move ? move : getInput(); /*Could also be written as: move || getInput(); (return move (if has a value(r/p/s)) OR (||) return getInput*/
}


function getComputerMove(move) {
     
     return move ? move : randomPlay(); /*Same situation here as with getPlayerMove...move || randomPlay(); */
}   

function getWinner(playerMove,computerMove) {
    var winner;
        if (playerMove === computerMove) { 
            winner = "tie";
            
        } else if (playerMove === "rock") {   
            if (computerMove === "scissors") {
                winner = "Player"; 
            } else {
                winner = "Computer";
            }
        
        } else if (playerMove === "paper") {
            if (computerMove === "rock") {
                winner = "Player";
            } else {
                winner = "Computer";
            }
        
        } else if (playerMove === "scissors") { 
            if (computerMove === "paper") {
                winner = "Player";  
            } else {
                winner = "Computer"; 
            }
        }     

    return winner;
} 

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors\n")
    
    var playerWins = 0;
    var computerWins = 0; 

    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var roundWinner = getWinner(playerMove, computerMove);
        console.log("\nPlayer chose " + playerMove + " while Computer chose " + computerMove); //Adding \n at the end creates a line break that makes the script easier on the eyes.
        
        if (roundWinner === "Player") {
            playerWins++;
            console.log("Great! You win the round."); /*" The score is " + playerWins + " to " + computerWins);*/ 
        } 
        else if (roundWinner === "Computer") { 
            computerWins++;
            console.log("Sorry, but Computer won this round."); /*" The score is " + playerWins + " to " + computerWins);*/
        }
        else if (roundWinner === "tie"){
            console.log("Tie. But the score is " + playerWins + " to " + computerWins);

        }
        console.log("Player Wins:", playerWins, "Computer Wins:", computerWins + "\n");
    }
    if (playerWins === 5) {
            console.log("\nWoohoo! You win the game");
    }
    if (computerWins === 5){
            console.log("\nComputer wins the game. Try again!");
    }
    
    return [playerWins, computerWins];
}

playToFive(playerMove,computerMove);