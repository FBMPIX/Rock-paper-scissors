
const CHOICES = ["Rock", "Paper", "Scissors"];
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