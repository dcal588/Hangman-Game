var words=['wordone','wordtwo','wordthree','wordfour','wordfive'];
var hints=['hintone','hinttwo','hintthree','hintfour','hintfive'];
var randomNumber = Math.floor(Math.random() * words.length);
var randomWord = words[randomNumber];
var randomHint = hints[randomNumber];
var randomLetters = randomWord.split('');
var guessesMade = 0;
var guessesAvailable = randomWord.length + 5;
var blankSpaces = blankSpacesStart(randomWord);
var letterGuesses = [];

document.onkeypress = function (e) {
  e = e || window.event;
  letterGuesses.push(e.key);
  document.getElementById("guesses").innerHTML = letterGuesses;
  checker(e);
};

function blankSpacesStart (randomWord) {
  var spaces = '';
  for (var i = 0; i < randomWord.length; i++) {
    spaces = spaces + ' _';
  }
  var progressDiv = document.getElementById("progress");
  progressDiv.innerHTML = spaces;
}

var hintDiv = document.getElementById("hint");
hintDiv.innerHTML = randomHint;
      
if (guessesMade === guessesAvailable) {
  messageDiv.innerHTML = "Game Over";
}

var messageDiv = document.getElementById("message");

function checker (e){
  var i = randomLetters.indexOf(e.key);
  console.log("ekey " + e.key);
  console.log("variable i :" + i);
  if (i !== -1) {
    spaces.splice(i,1,);
    console.log("variable 1 number 2: " + i);
    progressDiv.innerHTML = randomLetters;
    console.log("random letters " + randomLetters);
  }
  var progressDiv = document.getElementById("progress");
  progress.innerHTML = spaces;
}
 
