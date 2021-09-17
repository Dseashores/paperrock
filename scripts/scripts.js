"use strict";


                         
            

        const computerPick = ['rock', 'paper', 'scissors'];
let playerScore = 0
let computerScore = 0
//let round = "matches"

const result = document.querySelector('.result');
const final = document.querySelector('.result > p');
const plaChoice = document.querySelector('#choice');
const playerSelections = document.querySelectorAll('.btn');
const playAgain = document.getElementById("playAga");

// Computer's random pick
        function computerSelection() {
         return computerPick[Math.floor(Math.random() * computerPick.length)]; }

         
     

function win(pick) {
    let computerSel = computerSelection();
    playerScore++

scores.textContent = ` ${pick} ${computerSel} Player's score is ${playerScore} and Computerscore is ${computerScore}`
if (playerScore >= 5) {
    final.textContent = "player wins!"
}

 // document.getElementById(pick).classList.add('green-glow');


}

function lose() {
computerScore++
scores.textContent = `Player's score is ${playerScore} and Computerscore is ${computerScore}`
if(computerScore >=5) {
final.textContent = "Computer wins!"
}
}

function tie() {
   scores.textContent =  "DRAWW!"
}





function game(pick) { //game function 
   
    let compSel = computerSelection();
    switch (pick + compSel) {
    case  "rockscissors":
    case  "paperrock":
    case "scissorspaper":
       win()
    break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
        lose()
        break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            tie()
            break;
}
}
    


final.textContent = "Who will win 5 times?" // update game round?
const scores = document.createElement('div');
scores.classList.add('result'); //actual scores
scores.textContent = `Player's score is ${playerScore} and Computerscore is ${computerScore}`
result.appendChild(scores)


 function playRound() { //function for player choice
playerSelections.forEach((btn) => {

btn.addEventListener('click', () => {
   
   game(btn.id)
   
})
})

 }

 playRound()

/*
 function match() {
    if(playerScore >= 5) {
      final.innerText= "The player wins the game!"
    } else if (computerScore >= 5) {
       final.innerText= "The computer wins the game!"
    }
}
*/

 playAgain.addEventListener('click', () => {
     
 })

 