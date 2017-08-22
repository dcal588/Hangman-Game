  
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
        console.log(e.key);
        console.log(letterGuesses);
      };

      function blankSpacesStart (randomWord){
        var spaces = '';
        for (var i = 0; i < randomWord.length; i++){
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

      function checker (){
        var i = randomLetters.indexOf(key);
        if (i !== -1) {
          randomLetters.splice(i,1);
        }
        var progressDiv = document.getElementById("progress");
          progressDiv.innerHTML = spaces;
      }

 
