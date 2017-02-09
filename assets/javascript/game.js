//any letter in the alphabet can be chosen
//the computer picks a random letter
//user selects a letter
//user's letter is compared to computer's letter
//if user's letter matches computer, add 1 win to user
//if user's letter doesn't match computer, reduce guesses left by 1
//if guesses left is still > 0 go back to line 3, if = 0 add a loss and restart game


//starting off game on page load
//

var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];

//computer randomly selects a letter
var computerSelection = options[Math.floor(Math.random()*options.length)];
                console.log(computerSelection);

        //number of guesses added to html
        var htmlGuessesLeft = "<p>Guesses Left: " + guessesLeft + "</p>";
                document.querySelector("#guessesLeft").innerHTML = htmlGuessesLeft;


//does reset need some info to run?
function reset() {
        //reset chances
         guessesLeft = 10;
        lettersGuessed.splice(0,lettersGuessed.length);
        var guessesMade = "<p>Your guesses so far: " + lettersGuessed + "</p>";
            document.querySelector("#guessesMade").innerHTML = guessesMade;

//computer randomly selects a letter
        computerSelection = options[Math.floor(Math.random()*options.length)];
        	console.log(computerSelection);

        //number of guesses added to html
        htmlGuessesLeft = "<p>Guesses Left: " + guessesLeft + "</p>";
                document.querySelector("#guessesLeft").innerHTML = htmlGuessesLeft;

                console.log('reset');
}
//user selects a letter
document.onkeyup = function() {
        
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        
        //prints the keystroke assigned to the variable name to the console
        console.log(userGuess);

         lettersGuessed.push(userGuess);
            var guessesMade = "<p>Your guesses so far: " + lettersGuessed + "</p>";
            document.querySelector("#guessesMade").innerHTML = guessesMade;

        if (userGuess == computerSelection) {
        	wins++;
        var htmlWins = "<p>Wins: " + wins + "</p>";
        document.querySelector("#wins").innerHTML = htmlWins;
                reset();
        } else {
                guessesLeft--;
                var htmlGuessesLeft = "<p>Guesses Left: " + guessesLeft + "</p>";
        document.querySelector("#guessesLeft").innerHTML = htmlGuessesLeft;

                if (guessesLeft === 0) {
                //game is over
                        lettersGuessed.length = 0
                        losses++;
                        var htmlLosses = "<p>Losses: " + losses + "</p>";
                        document.querySelector("#losses").innerHTML = htmlLosses;
                        

                        //show to screen
                                reset();

                }
        } 

        
        	
        	
        

}