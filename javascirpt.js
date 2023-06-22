//Define a statemenets matrix that tells the result
let winningStatements = [
    ["It's a tie! Both chose rock","You Lose! Paper beats Rock","You win! rock beats sissors"],
    ["You win! Paper beats Rock","It's a tie! Both chose paper","You Lose! sissors beats paper"],
    ["You Lose! rock beats sissors","You win! sissors beats paper","It's a tie! Both chose sissors"]
]
//Aquire the choice of the computer as 0, 1, or 2
function getComputerChoice() {
    return (Math.round(Math.random() * 10) % 3);
}
//log the result to the console via the matrix
function play(computerChoice, playerChoice) {
    console.log(winningStatements[playerChoice][computerChoice])
}
//play five rounds of RPS
function game() {
    let playerChoice;
    for (i = 0; i < 5; i++) {
    playerChoice = prompt('rock, paper, or sissors?').toLowerCase()
    playerChoice == 'rock'? playerChoice = 0: playerChoice == 'paper'? playerChoice = 1: playerChoice = 2;
    play(getComputerChoice(), playerChoice)
    }
}