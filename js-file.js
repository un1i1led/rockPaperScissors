let pScore = 0;
let cScore = 0;
let rounds = 0;

const results = document.querySelector('#score');
const finalScore = document.querySelector('#finalScore');
const imgPlayer = document.querySelector('#imgPlayer');
const imgComputer = document.querySelector('#imgComputer');

function computerPlay(){
    const choices = ["rock", "paper", "scissors"];

    const random = Math.floor(Math.random() * choices.length);
    comChoice(choices[random]);
    return choices[random];
}

function play(playerSelection, computerSelection){
    if (playerSelection == "rock" && computerSelection == "paper") {
        results.textContent += "\r\nYou lose! Paper beats Rock.";
        return [cScore++, amountRounds()];
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        results.textContent += "\r\nYou win! Paper beats Rock.";
        return [pScore++, amountRounds()];
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        results.textContent += '\r\nYou lose! Scissors beats Paper.';
        return [cScore++, amountRounds()];
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        results.textContent += '\r\nYou win! Scissors beats Paper.';
        return [pScore++, amountRounds()];;
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        results.textContent += '\r\nYou lose! Rock beats Scissors';
        return [cScore++, amountRounds()];
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        results.textContent += '\r\nYou win! Rock beats Scissors.';
        return [pScore++, amountRounds()];;
    } else if (playerSelection == computerSelection) {
        results.textContent += '\r\nTie!';
        return amountRounds();
    }
}


function game(id){
    rounds++;
    let playerSelection = id.toLowerCase();
    console.log(play(playerSelection, computerPlay()));
}

function amountRounds(){
    if (pScore == 5 || cScore == 5){
        if (pScore > cScore){
            finalScore.classList.add('win');
            finalScore.textContent = 'You win the series ' + pScore + ' - ' + cScore + '!';
        } else if (cScore > pScore){
            finalScore.classList.add('loss');
            finalScore.textContent = 'You lose the series ' + cScore + ' - ' + pScore + '!';
        } else {
            finalScore.textContent = 'It\'s a tie! final score is ' + pScore + ' - ' + cScore;
        }
    }

    if (pScore == 5 || cScore == 5){
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        playAgain.disabled = false;
    }
}

function comChoice(choice){
    if (choice == 'rock'){
        imgComputer.src= 'img/rock.jpg';
    } else if (choice == 'paper') {
        imgComputer.src = 'img/paper.jpg';
    } else {
        imgComputer.src = 'img/scissors.jpg';
    }
}

function imgChoice(choice){
    if (choice == 'rock'){
        imgPlayer.src= 'img/rock.jpg';
    } else if (choice == 'paper') {
        imgPlayer.src = 'img/paper.jpg';
    } else {
        imgPlayer.src = 'img/scissors.jpg';
    }
}

// Options section.
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playAgain = document.querySelector('#playAgain');

playAgain.disabled = true;

rock.addEventListener('click', e => {
    game('rock');
    imgChoice('rock');
});

paper.addEventListener('click', e => {
    game('paper');
    imgChoice('paper');
});

scissors.addEventListener('click', e => {
    game('scissors');
    imgChoice('scissors');
});

playAgain.addEventListener('click', e => {
    playAgain.disabled = true;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;

    results.textContent = '';
    finalScore.textContent = '';
    finalScore.classList.remove('win');
    finalScore.classList.remove('loss');
    imgPlayer.src = 'img/blank.png';
    imgComputer.src = 'img/blank.png';
    rounds = 0;
    pScore = 0;
    cScore = 0;
});


