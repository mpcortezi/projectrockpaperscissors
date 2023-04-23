function getUserChoice(userInput){
    userInput = userInput.toLowerCase(); // convert to lowercase
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        return userInput;
    } else {
        console.log("Please select rock, paper, or scissors.");
    }
}

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(){
    const playerSelection = getUserChoice(prompt('Choose your weapon'));
    const computerSelection = getComputerChoice();
    let result;

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')){
        result = 'You win! ' + playerSelection + ' beats ' + computerSelection;
    }
    else if (playerSelection == computerSelection){
        result = 'It\'s a tie. You both chose ' + playerSelection;
    }
    else{
        result = 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    }

    console.log(result);
}

// call playRound five times to play a best of five game
for (let i = 0; i < 5; i++){
    playRound();
}