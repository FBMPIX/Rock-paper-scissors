// Array holds the choices
let choiceArray = ["Rock", "Paper", "Scissors"];

let userPrompt = parseInt(prompt("Choices: \n1-Rock \n2-Paper \n3-Scissors \n===(Number)==="));
let botInput = () => {
    let randomIndex = Math.floor(Math.random() * 3);
    return randomIndex;
};

// Bots choice
let botChoice = choiceArray[botInput()];

// User choice
let userChoice = choiceArray[userPrompt -1];

// Function to determine winner
function playRound (user, bot) {
    if (user === bot) {
        return "It's a tie!";
    } else if (
        (user === "Rock" && bot === "Scissors") ||
        (user === "Paper" && bot === "Rock") ||
        (user === "Scissors" && bot === "Paper")
    ) {
        return "User wins!";
    } else {
        return "Bot wins!";
    }  
}

// Displaying results
let game = playRound(userChoice, botChoice);
alert(`
Bot Choice: ${botChoice} \n 
User Choice: ${userChoice} \n
Result: ${game} `);