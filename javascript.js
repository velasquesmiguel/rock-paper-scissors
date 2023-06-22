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

function getComputerChoice(){
    const compChoice = Math.floor(Math.random() * 3);
    if (compChoice == 0) {
    return 'rock';
    } else if (compChoice == 1) {
    return 'paper'
    } else {
    return 'scissors'
    }
}
console.log(getComputerChoice());

let playerChoice = prompt("Choose Rock, Paper or Scissors").toLowerCase();
console.log(playerChoice)

function round() {
    if (getComputerChoice() === playerChoice) {
        return 'Draw! play again'
    }
    else if(playerChoice === 'rock' && getComputerChoice() === 'scissors'){
        return "You Win! Rock beats Scissors"
    }
    else if(playerChoice === 'paper' && getComputerChoice === 'rock'){
        return "You Win! Paper beats Rock"
    }
    else if(playerChoice === 'scissors' && getComputerChoice() === 'paper'){
        return "You win! Scissors beats Paper"
    }
    else if(playerChoice === 'rock' && getComputerChoice() === 'paper'){
        return "You Loose! Paper beats Rock"
    }
    else if(playerChoice === 'paper' && getComputerChoice() === 'scissors'){
        return "You Loose! Scissors beats Paper"
    }
    else if(playerChoice === 'scissors' && getComputerChoice() === 'rock'){
        return "You Loose! Rock beats Scissors"
    }
    else {
        return "You must have entered the wrong input!"
    }
}
console.log(round())

