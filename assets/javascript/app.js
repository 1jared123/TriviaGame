
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

	
	// $(".btn").on("click", function() {
	// 	$(".timer").html("<h1> It's working! </h1>");
	// });

	//var for questions. 
	//Most likely an object set up with subsections titled questions, and answers. 
	var questions = {

		possibleQuestions: [

		{
		question: "Who's the richest superhero?",
		answer: "Iron Man",
		options: ["Iron Man", "Captain America", "Bat Man", "Hulk"] 
		},

		{
		question: "Who's the the largest Marvel Superhero?",
		answer: "Hulk",
		options: ["Hulk", "Iron Man", "War Machine", "Black Widow"] 
		},

		{
		question: "What's the best Marvel Movie ever made?",
		answer: "Iron Man 3",
		options: ["Avengers ", "Hulk ", "Thor 2 ", "Iron Man 3 "] 
		}


	]}

	function startGame() {
		gameState = resetGameState();
		onQuestion = resetQuestions();
		

	}
	

	function resetGameState() {  
//need the first question to pop up with some options to choose the answer. 
		return {
		currentQuestion: questions.possibleQuestions[0].question,
		currentAnswer: questions.possibleQuestions[0].answer,
		currentOptions: questions.possibleQuestions[0].options,
		timeLeft: 30,
		questionsRight: 0,
		questionsWrong: 0,
		missedQuestions: 0,

		}
	}


	function resetQuestions() {
		$(".question").html(gameState.currentQuestion);
		$(".choices").html(newOption());
		console.log(gameState);
	}


	function newOption() {
		var knewOptions = gameState.currentOptions; 
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
			gameState.currentQuestion = questions.possibleQuestions[1].question;
			gameState.currentAnswer = questions.possibleQuestions[1].answer;
			gameState.currentOptions = questions.possibleQuestions[1].options;
			$(".question").html(questions.possibleQuestions[1].question);
			resetingQuestions();
			countDown();
			clearTimeout(nextQuestion);
		}, 1000*3)
	}


	//needs to count if right or wrong or if not answered. 

	// if player selects correct answer, show congratz. 
	function answerCorrect() {
		$(".timer").html("CORRECT!");
		$(".choices").html(gameState.currentAnswer);
		stopTimer();
		gameState.questionsRight++;
		console.log(gameState);
		nextQuestion();
	}


	// if selected answer is wrong, tell them and show correct answer. 
	function answerWrong() {
		$(".timer").html("WRONG!!!");
		$(".choices").html(gameState.currentAnswer);
		stopTimer()
		gameState.questionsWrong++;
		nextQuestion();
	}


	// if time runs out, show correct answer and continue. 

	function ranOutOfTime(){
		$(".timer").html("Time ran out!!");
		$(".choices").html(gameState.currentAnswer);
		gameState.missedQuestions++;
		console.log(gameState);
		nextQuestion();
	}

	function resetingQuestions() {
		$(".question").html(gameState.currentQuestion);
		$(".choices").html(theNewOption());
		console.log(gameState);
	}

	function theNewOption() {
		var knewOptions = gameState.currentOptions; 
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
	function theNextQuestion() {
		var nextQuestion = setInterval(function() {
			gameState.currentQuestion = questions.possibleQuestions[1].question;
			gameState.currentAnswer = questions.possibleQuestions[1].answer;
			gameState.currentOptions = questions.possibleQuestions[1].options;
			$(".question").html(questions.possibleQuestions[1].question);
			resetingQuestions();
			countDown();
			clearTimeout(nextQuestion);
		}, 1000*3)
	}

	//needs to count if right or wrong or if not answered. 

	// if player selects correct answer, show congratz. 
	function answerCorrect() {
		$(".timer").html("CORRECT!");
		$(".choices").html(gameState.currentAnswer);
		stopTimer();
		gameState.questionsRight++;
		console.log(gameState);
		nextQuestion();
	}


	// if selected answer is wrong, tell them and show correct answer. 
	function answerWrong() {
		$(".timer").html("WRONG!!!");
		$(".choices").html(gameState.currentAnswer);
		stopTimer()
		gameState.questionsWrong++;
		nextQuestion();
	}


	// if time runs out, show correct answer and continue. 

	function ranOutOfTime(){
		$(".timer").html("Time ran out!!");
		$(".choices").html(gameState.currentAnswer);
		gameState.missedQuestions++;
		console.log(gameState);
		nextQuestion();
	}


	function newOption() {
		var knewOptions = gameState.currentOptions; 
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
			gameState.currentQuestion = questions.possibleQuestions[1].question;
			gameState.currentAnswer = questions.possibleQuestions[1].answer;
			gameState.currentOptions = questions.possibleQuestions[1].options;
			$(".question").html(questions.possibleQuestions[1].question);
			resetQuestions();
			countDown();
			clearTimeout(nextQuestion);
		}, 1000*3)
	}

	//needs to count if right or wrong or if not answered. 

	// if player selects correct answer, show congratz. 
	function answerCorrect() {
		$(".timer").html("CORRECT!");
		$(".choices").html(gameState.currentAnswer);
		stopTimer();
		gameState.questionsRight++;
		console.log(gameState);
		nextQuestion();
	}


	// if selected answer is wrong, tell them and show correct answer. 
	function answerWrong() {
		$(".timer").html("WRONG!!!");
		$(".choices").html(gameState.currentAnswer);
		stopTimer()
		gameState.questionsWrong++;
		nextQuestion();
	}


	// if time runs out, show correct answer and continue. 

	function ranOutOfTime(){
		$(".timer").html("Time ran out!!");
		$(".choices").html(gameState.currentAnswer);
		gameState.missedQuestions++;
		console.log(gameState);
		nextQuestion();
	}



	//final screen showing the tallies of correct and inccorect and missed answers.
	// with restart button to start the game over again.  
	function endOfQuestions() {
		$(".results").html("Questions Wrong: " + gameState.questionsWrong + "<br>Questions Right: " + gameState.questionsRight + "<br>Questions Missed: " + gameState.missedQuestions);
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

	/* loop though all question, if all the questions have recieved an asnwer, then play gameOver.
	*/







	//==============
	//Function and Logic
	//==============



	//function for time management.
	function timeClock() {
		$(".timer").html("Time Left: " + betterHurry);
	}

window.onload = function() {

		//start by pushing a button to activiate the game and start the timer. 
		$(".btn").on("click", function() {
			$(".btn").hide();
			$(".word").hide();
			countDown();
			startGame();
		});

		$(".choices").on("click", ".choose-one",  function() {

			var selectedAnswer = $(this).attr('data-name');


			console.log("CLICKED!");

			if (selectedAnswer === gameState.currentAnswer) {
				answerCorrect();
			} else if (selectedAnswer !== gameState.currentAnswer) {
				answerWrong();
			}

		})

		




	//==============
	//Display Management
	//==============
	


	//==============
	//Initialize/Start
	//==============

	

}