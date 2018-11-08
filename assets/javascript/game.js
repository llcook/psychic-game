var wins = 0;
var losses = 0;
var guesses = 10; 
var guessesLeft = 10;
var guessedLetters = [];

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

document.onkeyup = function (event) {
    
    var userChoice = event.key.toUpperCase();

    var computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];

    // APP ACCEPTS USERCHOICE ONLY IF IT'S IN ALPHABET
    if (alphabet.indexOf(userChoice) !== -1) {
        console.log(userChoice);

        if (userChoice === computerPick) {
            wins++;
        } else {
            losses++;
            guessesLeft--;
        }

        document.getElementById("wins").textContent = wins;
        document.getElementById("losses").textContent = losses;
        document.getElementById("guessesLeft").textContent = guessesLeft;
        document.getElementById("guessedLetters").textContent = guessedLetters;

    }}
