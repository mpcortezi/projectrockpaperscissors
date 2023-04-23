function getComputerChoice(){
  let randomNumber = Math.floor(Math.random()*3)  
switch (randomNumber){
    case 0:
        return "rock";
    case 1:
        return "paper";
    case 2:
        return "scissors";
}}

let userInput = " ";
const playerSelection = getUserChoice();
const computerSelection = getComputerChoice();
let result = "";


function getUserChoice(userInput){
    userInput = userInput.toLowerCase();
      if (userInput === `rock`|| userInput === `paper` || userInput === `scissors`){
        return userInput;
      } else {
        console.log("Please select rock, paper or scissors")
    }

}

function playRound(playerSelection, computerSelection){
    prompt("Choose one: Rock, Paper or Scissors?", userInput);
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')){
    result = ('You win!' + playerSelection + 'beats' + computerSelection +)
}
else if (playerSelection == computerSelection){
    result = ('It\'s a tie. You both chose' + playerSelection +)
}
else{
    result = ('You lose!' + computerSelection + 'beats' + playerSelection +)
}
console.log(result)
}
