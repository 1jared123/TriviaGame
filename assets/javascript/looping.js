
	//==============
	//Application State
	//==============
	var gameState, onQuestion, stopTimer
	


	//gameState var for correct and wrong answers, counters for both. and the question. 
	var gameState = {
		currentQuestion: "",
		currentAnswer: "",
		currentOptions: "",
		timeLeft: 30,
		questionsRight: 0,
		questionsWrong: 0,
		missedQuestions: 0,

	}

	var options = ["Iron Man", "Captain America", "Iron Man 3", "Hulk"]
	// $(".btn").on("click", function() {
	// 	$(".timer").html("<h1> It's working! </h1>");
	// });

	//var for questions. 
	//Most likely an object set up with subsections titled questions, and answers. 
	var questions = [

		{
		question: "Who's the richest superhero?",
		answer: "Iron Man",
		},

		{
		question: "Who's the the largest Marvel Superhero?",
		answer: "Hulk",
		},

		{
		question: "What's the best Marvel Movie ever made?",
		answer: "Iron Man 3",
		}


	]

	function startGame() {
		gameState = resetGameState();
		onQuestion = resetQuestions();
	}
	

	function resetGameState() {  
//need the first question to pop up with some options to choose the answer. 
		return {
		currentQuestion: questions[0].question,
		currentAnswer: questions[0].answer,
		timeLeft: 30,
		questionsRight: 0,
		questionsWrong: 0,
		missedQuestions: 0,

		}
	}


	function resetQuestions() {
		$(".question").html(gameState.currentQuestion);
		$(".choices").html(newOption());
		choicesChosen();
	}


	function newOption() {
		var knewOptions = options; 
		$(".choices").empty();

		for ( i = 0; i < knewOptions.length; i++) {
			
			var a = $("<button>");

			a.addClass("choose-one");
			a.attr("data-name", knewOptions[i]);
			a.text(knewOptions[i]);

			$(".choices").append(a);

		}
	}	

	// after 5 seconds show next question without user input. 
	// 3 seconds for testing phase
	function nextQuestion() {
		var nextQuestion = setInterval(function() {
			gameState.currentQuestion = questions[1].question;
			gameState.currentAnswer = questions[1].answer;
			gameState.timeLeft = 30;
			$(".question").html(questions[1].question);
			resetingQuestions();
			clearTimeout(nextQuestion);
		}, 1000*3)
	}


	//needs to count if right or wrong or if not answered. 

	// if player selects correct answer, show congratz. 
	function answerCorrect() {
		$(".timer").html("CORRECT!");
		$(".choices").html(gameState.currentAnswer);
		gameState.questionsRight++;
		nextQuestion();
	}


	// if selected answer is wrong, tell them and show correct answer. 
	function answerWrong() {
		$(".timer").html("WRONG!!!");
		$(".choices").html(gameState.currentAnswer);
		gameState.questionsWrong++;
		nextQuestion();
	}


	// if time runs out, show correct answer and continue. 

	function ranOutOfTime(){
		$(".timer").html("Time ran out!!");
		$(".choices").html(gameState.currentAnswer);
		gameState.missedQuestions++;
		nextQuestion();
	}

	function resetingQuestions() {
		$(".question").html(gameState.currentQuestion);
		$(".choices").html(newOption());
		choicesToChoose();
	}

	function resetingTheQuestions() {
		$(".question").html(gameState.currentQuestion);
		$(".choices").html(newOption());
		choicesChoices();
	}

	// after 5 seconds show next question without user input. 
	// 3 seconds for testing phase
	function theNextQuestion() {
		var nextQuestion = setInterval(function() {
			gameState.currentQuestion = questions[2].question;
			gameState.currentAnswer = questions[2].answer;
			gameState.timeLeft = 30;
			$(".question").html(questions[2].question);
			resetingTheQuestions();
			clearTimeout(nextQuestion);
		}, 1000*3)
	}

	//needs to count if right or wrong or if not answered. 

	// if player selects correct answer, show congratz. 
	function answerIsCorrect() {
		$(".timer").html("CORRECT!");
		$(".choices").html(gameState.currentAnswer);
		gameState.questionsRight++;
		theNextQuestion();
	}


	// if selected answer is wrong, tell them and show correct answer. 
	function answerIsWrong() {
		$(".timer").html("WRONG!!!");
		$(".choices").html(gameState.currentAnswer);
		gameState.questionsWrong++;
		theNextQuestion();
	}


	// if time runs out, show correct answer and continue. 

	function ranOutsOfTime(){
		$(".timer").html("Time ran out!!");
		$(".choices").html(gameState.currentAnswer);
		gameState.missedQuestions++;
		theNextQuestion();
	}

	//needs to count if right or wrong or if not answered. 

	// if player selects correct answer, show congratz. 
	function answerWasCorrect() {
		$(".timer").html("CORRECT!");
		$(".choices").html(gameState.currentAnswer);
		gameState.questionsRight++;
		endOfQuestions();
	}


	// if selected answer is wrong, tell them and show correct answer. 
	function answerWasWrong() {
		$(".timer").html("WRONG!!!");
		$(".choices").html(gameState.currentAnswer);
		gameState.questionsWrong++;
		endOfQuestions();
	}


	// if time runs out, show correct answer and continue. 

	function ranOutsOfTime(){
		$(".timer").html("Time ran out!!");
		$(".choices").html(gameState.currentAnswer);
		gameState.missedQuestions++;
		endOfQuestions();
	}


	//final screen showing the tallies of correct and inccorect and missed answers.
	// with restart button to start the game over again.  
	function endOfQuestions() {
		$(".results").html("Questions Wrong: " + gameState.questionsWrong + "<br>Questions Right: " + gameState.questionsRight + "<br>Questions Missed: " + gameState.missedQuestions);
		stopTimer();
		$(".restart-button").show();
		$(".restart-button").html("<div> <button type='button' class='btn btn-default reset'>Restart</button>" + 
          "</div> <br>");
		$(".reset").on("click", function() {
			startGame();
			$(".restart-button").hide();
			$(".results").empty();
		})
	}

	// display one question at a time. start with first question. 
	

	//==============
	//Event Management
	//==============


	function countDown() {
		var betterHurry = setInterval(function() {
			console.log(gameState.timeLeft);

			gameState.timeLeft = gameState.timeLeft - 1;

			$(".timer").html("Time Remaining: " + gameState.timeLeft + " Seconds" + "<br>" +" No Pressure...");

			if (gameState.timeLeft <= 0) {
				clearTimeout(betterHurry);
				ranOutOfTime();
			}
		}, 1000);

		stopTimer = function stopCounter() {
			clearTimeout(betterHurry);
		}
	}

	function choicesChosen() {
			$(".choices").on("click", ".choose-one",  function() {

				var selectedAnswer = $(this).attr('data-name');


				console.log("CLICKED!");

				if (selectedAnswer === gameState.currentAnswer) {
					answerCorrect();
				} else if (selectedAnswer !== gameState.currentAnswer) {
					answerWrong();
				}

			})
		}

		function choicesToChoose() {
			$(".choices").on("click", ".choose-one",  function() {

				var selectedAnswer = $(this).attr('data-name');


				console.log("CLICKED!");

				if (selectedAnswer === gameState.currentAnswer) {
					answerIsCorrect();
				} else if (selectedAnswer !== gameState.currentAnswer) {
					answerIsWrong();
				}

			})
		}

		function choicesChoices() {
			$(".choices").on("click", ".choose-one",  function() {

				var selectedAnswer = $(this).attr('data-name');


				console.log("CLICKED!");

				if (selectedAnswer === gameState.currentAnswer) {
					answerWasCorrect();
				} else if (selectedAnswer !== gameState.currentAnswer) {
					answerWasWrong();
				}

			})
		}



	//==============
	//Function and Logic
	//==============


window.onload = function() {

		//start by pushing a button to activiate the game and start the timer. 
		$(".btn").on("click", function() {
			$(".btn").hide();
			$(".word").hide();
			countDown();
			startGame();
		});

		




	//==============
	//Display Management
	//==============
	


	//==============
	//Initialize/Start
	//==============

	

}