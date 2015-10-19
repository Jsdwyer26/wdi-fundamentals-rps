////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
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
//var rock = "rock"; //Is defining rock, paper, scissocrs, necessary since the instructions tell us we're assuming them as the only values? 
//var paper = "paper";
//var scissors = "scissors";

function getPlayerMove(move) {
    return move || getInput();  /*Could this also be written as: return (move ? move : getInput()); ...I guess I would have to make var rock="rock"; var paper= "paper"; var scissor="scissor";, inorder to make rock, paper, scissors "truthey"(make it so it's not null) . Maybe?*/
}   /*Write an expression that operates on a variable called `move`. If a `move` has a value, your expression should evaluate to that 
    value. However, if `move` is not specified / is null, your expression should equal `getInput()`.*/


function getComputerMove(move) {
    return move || randomPlay();
}   /* Write an expression that operates on a variable called `move` If a `move` has a value, your expression should evaluate to that 
    value. However, if `move` is not specified / is null, your expression should equal `randomPlay()`.*/


function getWinner(playerMove,computerMove) {
    var winner;
        if(playerMove === computerMove) { 
            winner = "tie";
            consloe.log ("Tie!")
    }
        else if (playerMove === "rock") { /*//Can it be (if we keep rock, paper, scisscors undeclared variables): else if ((playerMove="rock"))*/
            if (computerMove === "scissors") {
                winner= "Player";
                //playerWins+=1; 
        }   else {
                winner= "Computer";
                //computerWins+=1;
            }
        }

        else if (playerMove === "paper") {
            if (computerMove === "rock") {
                winner = "Player";
                //layerWins+=1;
            } else {
                winner = "Computer";
                //computerWins+=1; 
            }
        }

        else if (playerMove === "scissors") { 
            if (computerMove === "paper") {
                winner = "Player";
                //playerWins+=1;
            } else {
                winner = "Computer";
                //computerWins+=1;
            }
        }     

    return winner;
} 

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    
    var playerWins = 0;/*Can I declare these values at the top where I declared most other things?*/ 
    var computerWins = 0; 
    
    var winner = getWinner(getPlayerMove(), getComputerMove());
    console.log("Player chose " + playerMove + " while Computer chose " + computerMove);

    getWinner(playerMove, computerMove);//Do I put playerMove and computerMove when I'm calling it since those are the inputs when the function was declared?
    while ((playerWins <= 5) && (computerWins <= 5)){
        if (winner === "player") {
            playerWins ++;
            console.log("The score is " + playerWins + " to " + computerWins + "\n");
        }
        else if (winner === "computer") { //Could it be "quicker" to replace this else...if with just an if--the else...if, in this case, doesn't need to run the if inorder for it 
            computerWins ++;
            console.log("The score is " + playerWins + " to " + computerWins + "\n");
        }
        else if (winner === "tie"){

        }
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


