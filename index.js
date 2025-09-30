const choices = ["rock", "paper", "scissors"];

let roundCount = 0;
let userWinCounter = 0;
let botWinCounter = 0;
let tiesCounter = 0;

const userOptions =       document.body.querySelector("#userOptions");
const userButtons =       document.body.querySelectorAll("#userOptions button")
const userWins =          document.body.querySelector("#userWins");
const botWins =           document.body.querySelector("#botWins");
const ties =              document.body.querySelector("#ties");
const displayUserChoice = document.body.querySelector("#displayChoice #userChoice");
const displayBotChoice =  document.body.querySelector("#displayChoice #botChoice");
const displayGameWinner = document.body.querySelector("#displayChoice #gameWinner");
const displayRound =      document.body.querySelector("h1");

function determineWinner(user, bot) {
    if (user === bot) {
        return "tie";
    } else if (    
        (user === "rock" && bot === "scissors") ||
        (user === "paper" && bot === "rock") ||
        (user === "scissors" && bot === "paper")) 
    {
        return "user";
    } else {
        return "bot";
    }  
}

userButtons.forEach((button) => {
    let grabInnerText = (button.textContent).toLowerCase();

    button.addEventListener("click", () =>{
        let botOption = choices[Math.floor(Math.random() * 3)];
        displayRound.textContent = `Round: ${roundCount+=1}`;
        displayUserChoice.textContent = `USER: ${grabInnerText}`;
        displayBotChoice.innerText = `BOT: ${botOption}`

        if((determineWinner(grabInnerText, botOption)) === "tie"){
            ties.innerHTML = `Ties: ${tiesCounter+=1}`
        }else if((determineWinner(grabInnerText, botOption)) === "user") {
            userWins.textContent = `User Wins: ${userWinCounter+=1}`;
        } else { 
            botWins.textContent = `Bot Wins: ${botWinCounter+=1}`;
        }
        displayGameWinner.innerText = `WINNER: ${determineWinner(grabInnerText, botOption)}`;
    });
});