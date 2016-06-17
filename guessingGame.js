/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.
(function() {
	var previousSubmissions;
	var winningNumber;
})()
/* **** Guessing Game Functions **** */

// Generate the Winning Number

	function generateWinningNumber(){
		previousSubmissions = [];
		winningNumber = Math.floor((Math.random() * 100) + 1);
	}

	// Fetch the Players Guess

	function playersGuessSubmission(){
		return +$('#number').val();
	}

	// Determine if the next guess should be a lower or higher number

	function lowerOrHigher(){

		if(playersGuessSubmission() < winningNumber) {
			return "lower"
		} else if(playersGuessSubmission() > winningNumber) {
			return "higher"
		}

	}

	// Check if the Player's Guess is the winning number 

	function checkGuess(){
		return playersGuessSubmission() === winningNumber;
	}

	// Create a provide hint button that provides additional clues to the "Player"
	function provideHint(){
		var message;
		if(Math.abs(playersGuessSubmission() - winningNumber) > 10 && lowerOrHigher() === "lower"){
			message = "You are cold, guess higher!";
		} else if(Math.abs(playersGuessSubmission() - winningNumber) < 10 && lowerOrHigher() === "higher") {
			message = "You are cold, guess lower!";
		} else {
			message = "You are hot!";
		}
		return message;
	}

	// Allow the "Player" to Play Again

	function playAgain(){
		generateWinningNumber();
	}

/* **** Event Listeners/Handlers ****  */	

$(document).ready(function() {	
	generateWinningNumber();
	$('h2').fadeTo('2000', '1', function() {
		$('p').fadeTo('2000', '1');	
	});

	$('#hint').on('click', function(){
		playersGuessSubmission();
		checkGuess();
		$('p').replaceWith( "<p>"+provideHint()+"</p>" );
		$('p').fadeTo('2000', '1').delay('2500').fadeTo('2000', '0', function(){
			$('p').replaceWith( "<p> Guess the number between 1 and 100 that was randomly generated</p>");
			$('p').fadeTo('2000', '1');
		});	
	});

	$('#submit').on('click', function(){
		if($.inArray(playersGuessSubmission(), previousSubmissions) === -1){
			previousSubmissions.push(playersGuessSubmission())
		};

		if(checkGuess()){
			$('p').replaceWith( "<p> <b> Congratulations! </b> You are correct. A new number will now be generated.</p>" );
			$('p').fadeTo('2000', '1').fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).delay('2500').fadeTo('2000', '0', function(){
				generateWinningNumber();
				$('p').replaceWith( "<p> Guess the number between 1 and 100 that was randomly generated</p>");
				$('p').fadeTo('2000', '1');
				$('#number').val('0');
			});
		} else if (previousSubmissions.length < 5){
			$('p').replaceWith( "<p> You are incorrect and have " + (5 - previousSubmissions.length) + " guesses remaining!</p>");
			$('#number').val('0');
			$('p').fadeTo('2000', '1').delay('2500').fadeTo('2000', '0', function(){
				$('p').replaceWith( "<p> Guess the number between 1 and 100 that was randomly generated</p>");
				$('p').fadeTo('2000', '1');
			});
		} else {
			$('p').replaceWith( "<p> You are incorrect and have run out of guesses! A new number will now be generated.</p>");
			$('#number').val('0');
			$('p').fadeTo('2000', '1').delay('2500').fadeTo('2000', '0', function(){
				$('p').replaceWith( "<p> Guess the number between 1 and 100 that was randomly generated</p>");
				$('p').fadeTo('2000', '1');
				generateWinningNumber();
			});
		}

	});


	$('#number').keydown(function (e){
	    if(e.keyCode == 13){
	        if($.inArray(playersGuessSubmission(), previousSubmissions) === -1){
			previousSubmissions.push(playersGuessSubmission())
		};

		if(checkGuess()){
			$('p').replaceWith( "<p> <b> Congratulations! </b> You are correct. A new number will now be generated.</p>" );
			$('p').fadeTo('2000', '1').fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).delay('2500').fadeTo('2000', '0', function(){
				generateWinningNumber();
				$('p').replaceWith( "<p> Guess the number between 1 and 100 that was randomly generated</p>");
				$('p').fadeTo('2000', '1');
				$('#number').val('0');
			});
		} else if (previousSubmissions.length < 5){
			$('p').replaceWith( "<p> You are incorrect and have " + (5 - previousSubmissions.length) + " guesses remaining!</p>");
			$('#number').val('0');
			$('p').fadeTo('2000', '1').delay('2500').fadeTo('2000', '0', function(){
				$('p').replaceWith( "<p> Guess the number between 1 and 100 that was randomly generated</p>");
				$('p').fadeTo('2000', '1');
			});
		} else {
			$('p').replaceWith( "<p> You are incorrect and have run out of guesses! A new number will now be generated.</p>");
			$('#number').val('0');
			$('p').fadeTo('2000', '1').delay('2500').fadeTo('2000', '0', function(){
				$('p').replaceWith( "<p> Guess the number between 1 and 100 that was randomly generated</p>");
				$('p').fadeTo('2000', '1');
				generateWinningNumber();
			});
		}

	    }
	})
	
	$('#replay').on('click', function(){
		generateWinningNumber();
		$('#number').val('0');
		$('p').replaceWith( "<p>A new number has been generated!</p>" );
		$('p').fadeTo('2000', '1').delay('2500').fadeTo('2000', '0', function(){
			$('p').replaceWith( "<p> Guess the number between 1 and 100 that was randomly generated</p>");
			$('p').fadeTo('2000', '1');
		});
	});

	var hover = {'background-color': '#EB9A57', 'border' : '1px solid #EB9A57'}
	var original = 	{'background-color': '#f38630', 'border' : '1px solid #f38630'}

	
	$('.button').on('mouseenter', function() {
		$(this).css(hover);
	});
	
	$('.button').on('mouseleave', function() {
		$(this).css(original);
	});


	
});

