var wins = 0;
var losses = 0;
var guesses = 10; 
var guessesLeft = 10;
var guessedLetters = [];

var computerChoices= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function updateGuessesLeft () {
    document.querySelector("guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
};

document.onkeyup = function (event) {

    var userOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    
    var userChoice = event.key.toUpperCase();

    // APP ACCEPTS USERCHOICE ONLY IF IT'S AVAILABLE IN USEROPTIONS
    if (userOptions.indexOf(userChoice) !== -1) {
        console.log(userChoice);
    }

    var computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var userOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    if (userOptions.indexOf(userChoice) > -1) {

        if (userChoice === computerPick) {
            wins++;
        } else {
            losses++
        }
    }}