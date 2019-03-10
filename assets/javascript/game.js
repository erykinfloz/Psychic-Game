//user types a letter and it loggs it
//the computer needs to randomly pick a letter
//the user has to guess the letter
//the user has 9 tries to guess the letter
//if the user guesses the letter win score goes up by 1
//if the user uses all 9 tries the game will reset and the losses go up by 1 and once the new game starts the compter randomly chooses a letter again


//This is a little popup for when the user first makes his way into the website
alert("Welcome To the Psychic-game Are You The Next Psychic?");
//this is the var for all the letters possible var letters=all the letter options from a-z
var letters = ["a","b","c","d","e","f","g","h","i","j","k","m","n","l","o","p","q","r","s","t","u","v","w","x","y","z"];
//These are the var for wins losses and guesses left wins and losses start at 0 and go up and down depending if they guess or dont guess the letter also guesses left start at 9 and do down by one each time user guesses the wrong letter if user uses all guesses game wil restart and losses go up by one
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuess = [];
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
console.log (computerGuess)

//These are the references for the html score var
var userChoiceText = document.getElementById("userChoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
//These are the functions run when the user runs the event
document.onkeyup = function(event) {
  userGuess.push(event.key);



  if ((event.key) === (computerGuess)) {
      wins++;
      computerGuess = letters[Math.floor(Math.random() * letters.length)];
      console.log(computerGuess)
      userGuess = [];
    }

    else {
      guessesLeft--;
      if (guessesLeft < 1){
        computerGuess = letters[Math.floor(Math.random() * letters.length)];
        console.log(computerGuess)
        userGuess = [];
      }
    }


    // Hide the directions


    // Display the user and computer guesses, and wins/losses/ties.
    userChoiceText.textContent = "You chose: " + userGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
  }
