
const Choices = ["Rock", "Paper", "Scissors"];

let amountOfRounds = parseInt(prompt("How many rounds would you like to play?"));

// Function to determine winner
function playRound (user, bot) {
    if (user === bot) {
        return "It's a tie!";
    } else if (    
        (user === "Rock" && bot === "Scissors") ||
        (user === "Paper" && bot === "Rock") ||
        (user === "Scissors" && bot === "Paper")) 
    {
        return "User wins!";
    } else {
        return "Bot wins!";
    }  
}

let roundCounter = 0;
let userRoundsWon = 0;
let botRoundsWon = 0;
let numberOfTies = 0;

for (let roundCounter = 1; roundCounter <= amountOfRounds; roundCounter++) {
    let UserInput = parseInt(
        prompt(`
        1-Rock 
        2-Paper
        3-Scissors
        `));
    let botIndex = Math.floor(Math.random() * 3);

    let botChoice = Choices[botIndex];
    let userChoice = Choices[UserInput -1];

    let result = playRound(userChoice, botChoice);
    
    if (result === "User wins!") {
        userRoundsWon++;
    } else if (result === "Bot wins!") {
        botRoundsWon++;
    } else {
        numberOfTies+=1;
    }
    
    alert(`
        ---- Round ${roundCounter} ----
        Bot Choice: ${botChoice} 
        User Choice: ${userChoice} 

        ---- Results: ${result} ----
        
        Bot Rounds Won: ${botRoundsWon} 
        User Rounds Won: ${userRoundsWon} 
        Number of ties: ${numberOfTies} 
    `);
}