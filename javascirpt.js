//Define needed variabels
let winningStatements = [
    ["It's a tie! Both chose rock","You lose! Paper beats Rock","You win! rock beats sissors"],
    ["You win! Paper beats Rock","It's a tie! Both chose paper","You lose! sissors beats paper"],
    ["You lose! rock beats sissors","You win! sissors beats paper","It's a tie! Both chose sissors"]
]
let buttons = document.querySelectorAll('button')
let div = document.querySelector('div')
let pscore = 0;
let cscore = 0;
let statement;
//Aquire the choice of the computer as 0, 1, or 2
function getComputerChoice() {
    return (Math.round(Math.random() * 10) % 3);
}
//play a round of rps
function play(computerChoice, playerChoice) {
    statement = winningStatements[playerChoice][computerChoice];
    statement.substring(4,7) == "win"? pscore++: statement.substring(4,8) == "lose"? cscore++: null;
    div.innerHTML = `${statement} <br> player score: ${pscore} <br> computer score: ${cscore}`
}
//initiate a round of rps upon selecting a choice
function game() {
    let playerChoice = this.dataset.number;
    play(getComputerChoice(), playerChoice)
}
//detect player selecting a choice
buttons.forEach(button => {button.addEventListener("click", game)});