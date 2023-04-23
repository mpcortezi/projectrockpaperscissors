let playerScore = 0;
let computerScore = 0;
let result = '';

function getUserChoice() {
    let userInput = prompt('Choose your weapon (rock, paper, or scissors):');
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Please select rock, paper, or scissors.');
      return getUserChoice(); // prompt again if invalid input entered
    }
  }
  

function getComputerChoice(){
  let randomNumber = Math.floor(Math.random()*3);  
  switch (randomNumber){
    case 0:
        return "rock";
    case 1:
        return "paper";
    case 2:
        return "scissors";
  }
}

function playRound(playerSelection, computerSelection){
    if (!playerSelection) {
        console.log('Please enter a valid choice.');
        return;
    }
    
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')){
            result = ('You win!' + playerSelection + ' beats ' + computerSelection);
            playerScore++;
    }
    else if (playerSelection == computerSelection){
        result = ('It\'s a tie. You both chose ' + playerSelection);
    }
    else{
        result = ('You lose!' + computerSelection + ' beats ' + playerSelection);
        computerScore++;
    }
    
    console.log(result);
    
    if (playerScore === 3 || computerScore === 3) {
        console.log('Game over!');
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
        return;
    }
    
    const nextPlayerSelection = getUserChoice();
    const nextComputerSelection = getComputerChoice();
    playRound(nextPlayerSelection, nextComputerSelection);
}

playRound(getUserChoice(), getComputerChoice());
