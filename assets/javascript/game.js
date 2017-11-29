var words=['wordone','wordtwo','wordthree','wordfour','wordfive'];
var hints=['hintone','hinttwo','hintthree','hintfour','hintfive'];
var randomNumber = Math.floor(Math.random() * words.length);
var randomWord = words[randomNumber];
var randomHint = hints[randomNumber];
var randomLetters = randomWord.split('');
var guessesMade = 0;
var guessesAvailable = randomWord.length + 5;
var letterGuesses = [];

hintPlacer ();
blankSpacesStart(randomWord);

document.onkeypress = function (e) {
  e = e || window.event;
  letterGuesses.push(e.key);
  document.getElementById("guesses").innerHTML = letterGuesses;
  checker(e);
};

function hintPlacer () {
document.getElementById("hint").innerHTML = randomHint;
}

function blankSpacesStart (randomWord) {
  var spaces = [];
  for (var i = 0; i < randomWord.length; i++) {
    spaces = spaces + ' _';
  }
  document.getElementById("progress").innerHTML = spaces;
};

function guesses () {
if (guessesMade === 2) {
    document.getElementById("message").innerHTML = "Game Over";
  }
}
function checker (e){
  var i = randomLetters.indexOf(e.key);
  console.log("ekey " + e.key);
  console.log("variable i :" + i);
  if (i !== -1) {
        console.log("variable 1 number 2: " + i);
    spaces.splice(i,1, );
    console.log(spaces);
    progressDiv.innerHTML = spaces;
    console.log("random letters " + randomLetters);
  }
  var progressDiv = document.getElementById("progress");
  progress.innerHTML = spaces;
}
