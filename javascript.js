/* Solving the problem:
1 -  Get the computer to choose between Rock, Paper, Scissors
2 - Get the human to choose between Rock, Paper, Scissors
3 - Compare the two choices:
    If draw type a draw message
    If human wins type a win message
    If human loses type a loss message
4 - Repeat the game 5 times
5 - Tally the total wins/losses and declare a winner between the computer or human
*/
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const compChoice = Math.floor(Math.random() * 3);
    if (compChoice === 0) {
    return 'rock';
    } else if (compChoice === 1) {
    return 'paper'
    } else {
    return 'scissors'
    }
}


const playerChoice = prompt("Choose Rock, Paper or Scissors").toLowerCase();
const computerChoice = getComputerChoice();
console.log("computer choice is", computerChoice)
console.log("player choice is", playerChoice);


function round() {
    if (computerChoice === playerChoice) {
        return 'Draw! play again'
    }
    else if(playerChoice === 'rock' && computerChoice === 'scissors'){
        playerScore++
        return "You Win! Rock beats Scissors." 
    }
    else if(playerChoice === 'paper' && computerChoice === 'rock'){
        playerScore++
        return "You Win! Paper beats Rock."
    }
    else if(playerChoice === 'scissors' && computerChoice === 'paper'){
        playerScore++
        return "You win! Scissors beats Paper."
    }
    else if(playerChoice === 'rock' && computerChoice === 'paper'){
        computerScore++
        return "You Loose! Paper beats Rock."
    }
    else if(playerChoice === 'paper' && computerChoice === 'scissors'){
        computerScore++
        return "You Loose! Scissors beats Paper."
    }
    else if(playerChoice === 'scissors' && computerChoice === 'rock'){
        computerScore++
        return "You Loose! Rock beats Scissors."
    }
    else {
        return "You must have entered the wrong input!"
    }
}
console.log(round())
console.log(playerScore)
console.log(computerScore)
