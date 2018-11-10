var wins = 0;
var losses = 0;
var guesses = 10; 
var guessesLeft = 10;
var guessedLetters = [];

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

document.onkeyup = function (event) {
    
    var userChoice = event.key.toUpperCase();

    var computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];

    if (alphabet.indexOf(userChoice) !== -1) {
        console.log(" user choice: " + userChoice + " computer pick: " + computerPick);


        if (userChoice === computerPick) {
            wins++;
            alert("The computer picked " + computerPick + " and so did you! You WIN!");
            guessesLeft = 10;
            guessedLetters = [];
        } else {
            guessesLeft--;
            guessedLetters.push(" " + userChoice);
        }
        
        if (guessesLeft < 0) {
            losses++;
            alert("Game over!")
            guessesLeft = 10;
            guessedLetters = [];
        }

        document.getElementById("wins").textContent = wins;
        document.getElementById("losses").textContent = losses;
        document.getElementById("guessesLeft").textContent = guessesLeft;
        document.getElementById("guessedLetters").textContent = guessedLetters;

    }}
