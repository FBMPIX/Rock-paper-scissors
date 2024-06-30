// Array Displays the choices
let choiceArray = ["Rock", "Paper", "Scissors"];

let userInput = parseInt(prompt("Enter your choice(number): \n1.Rock \n2.Paper \n3.Scissors \n---Reload the site to play again---"));
let botInput = () => {
    let randomIndex = Math.floor(Math.random() * 3);
    return randomIndex;
};

// Bots choice
let botChoiceIndex = botInput();
let botChoice = choiceArray[botChoiceIndex];

// User choice
let userChoice = choiceArray[userInput -1];

// Function to determine winner
function playRound (user, bot) {
    if (user === bot) {
        return "It's a tie!";
    } else if (
        (user === "Rock" && bot === "Scissors") ||
        (user === "Paper" && bot === "Rock") ||
        (user === "Scissors" && bot === "Paper")
    ) {
        return "You win!";
    } else {
        return "Bot wins!";
    }  
}

// Displaying results
let result = playRound(userChoice, botChoice);
console.log(`User choice: ${userChoice}`);
console.log(`Bot choice: ${botChoice}`);
console.log(`Result: ${result}`);