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
    //console.log(move);
    return move || getInput(); /*return move ? move : getInput() */    /*Could this also be written as: return (move ? move : getInput()); ...I guess I would have to make var rock="rock"; var paper= "paper"; var scissor="scissor";, inorder to make rock, paper, scissors "truthey"(make it so it's not null) . Maybe?*/
    //playerMove = getPlayerMove;
    //if(move){
    //     return playerMove= move; 
    // } else {
    //     return playerMove = getInput();
    // }
}

//getPlayerMove(rock, paper, scissors, shoot)
/*Write an expression that operates on a variable called `move`. If a `move` has a value, your expression should evaluate to that 
    value. However, if `move` is not specified / is null, your expression should equal `getInput()`.*/


function getComputerMove(move) {
     //console.log(move);
     return move || randomPlay(); /*return move ? move : randomPlay() */    
}   /* Write an expression that operates on a variable called `move` If a `move` has a value, your expression should evaluate to that 
    value. However, if `move` is not specified / is null, your expression should equal `randomPlay()`.*/


function getWinner(playerMove,computerMove) {
    var winner;
        if (playerMove === computerMove) { 
            winner = "tie";
            
        } else if (playerMove === "rock") { /*//Can it be (if we keep rock, paper, scisscors undeclared variables): else if ((playerMove="rock"))*/
            if (computerMove === "scissors") {
                winner = "Player";
                //playerWins++; 
            } else {
                winner = "Computer";
                //computerWins++;
            }
        } else if (playerMove === "paper") {
            if (computerMove === "rock") {
                winner = "Player";
                //playerWins++;
            } else {
                winner = "Computer";
                //computerWins++; 
            }
        } else if (playerMove === "scissors") { 
            if (computerMove === "paper") {
                winner = "Player";
                //playerWins++;
            } else {
                winner = "Computer";
                //computerWins++;
            }
        }     

    return winner;
} 

  /* Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.*/
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors")
    
    var playerWins = 0;/*Can I declare these values at the top where I declared most other things?*/ 
    var computerWins = 0; 

                      //KILL THIS getWinner(playerMove, computerMove);//Do I put playerMove and computerMove when I'm calling it since those are the inputs when the function was declared?
    while (playerWins < 5 && computerWins < 5){
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var roundWinner = getWinner(playerMove, computerMove);
        console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
        
        if (roundWinner === "Player") {
            playerWins++;
            console.log("The score is " + playerWins + " to " + computerWins + "\n");
        }
        else if (roundWinner === "Computer") { //Could it be "quicker" to replace this else...if with just an if--the else...if, in this case, doesn't need to run the if inorder for it 
            computerWins++;
            console.log("The score is " + playerWins + " to " + computerWins + "\n");
        }
        else if (roundWinner === "tie"){
            console.log("Tie\n");

        }
        console.log("playerWins:", playerWins, "\ncomputerWins:", computerWins);
    }
    if (playerWins === 5) {
            console.log("Player wins the game");
    }
    if (computerWins === 5){
            console.log("Computer wins the game");
    }
    
    return [playerWins, computerWins];
}

playToFive(playerMove,computerMove);