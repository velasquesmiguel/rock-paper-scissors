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
let playerChoice = prompt('Choose Rock, Paper or Scissors').toLowerCase();
console.log(playerChoice)
