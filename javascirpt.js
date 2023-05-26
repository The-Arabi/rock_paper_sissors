let winningStatements = [
    ["It's a tie! Both chose rock","You Lose! Paper beats Rock","You win! rock beats sissors"],
    ["You win! Paper beats Rock","It's a tie! Both chose paper","You Lose! sissors beats paper"],
    ["You Lose! rock beats sissors","You win! sissors beats paper","It's a tie! Both chose sissors"]
]
let playerChoice;

function getComputerChoice() {
    return (Math.round(Math.random() * 10) % 3);
}

function play(computerChoice, playerChoice) {
    console.log(winningStatements[playerChoice][computerChoice])
}

function game() {
    for (i = 0; i < 5; i++) {
    playerChoice = prompt('rock, paper, or sissors?')
    playerChoice = playerChoice.toLowerCase()
    playerChoice == 'rock'? playerChoice = 0: playerChoice == 'paper'? playerChoice = 1: playerChoice = 2;
    play(getComputerChoice(), playerChoice)
    }
}
