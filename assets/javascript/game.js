    $(document).ready(function() {
      var words=['wordone','wordtwo','wordthree','wordfour','wordfive']
      var hints=['hintone','hinttwo','hintthree','hintfour','hintfive']
      var randomNumber = Math.floor(Math.random() * words.length)
      var randomWord = words[randomNumber];
      var randomHint = hints[randomNumber];
      var randomLetters = randomWord.split('');
      var blankSpaces = blankSpacesStart(randomWord);
      $(function() {
        $(window).keypress(function(event) {
          var key = String.fromCharCode(event.which)
          console.log(key);
        });
      });
      $(function(){
        var blankSpacesStart = '';
        for (var i = 0; i < randomWord.length; i++) {
          var  blankSpacesStart= blankSpacesStart+'_';
        }
      });
        console.log(blankSpacesStart);

    });