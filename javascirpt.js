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
//play a round of rps
function play(computerChoice, playerChoice) {
    console.log(winningStatements[playerChoice][computerChoice])
}
//initiate a round of rps upon selecting a choice
function game() {
    let playerChoice = this.dataset.number;
    play(getComputerChoice(), playerChoice)
}
//detect player selecting a choice
let buttons = document.querySelectorAll('button')
buttons.forEach(button => {button.addEventListener("click", game)});