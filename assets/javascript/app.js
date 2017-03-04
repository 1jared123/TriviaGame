
	//==============
  //Application State
  //==============
  var gameState, onQuestion, stopTimer
  


  //gameState var for correct and wrong answers, counters for both. and the question. 
  var gameState = {
    currentQuestion: "",
    currentAnswer: "",
    timeLeft: 30,
    questionsRight: 0,
    questionsWrong: 0,
    missedQuestions: 0,

  }

  var options = ["Iron Man","Bat Man", "Hulk", "Iron Man 3"]

  
  // $(".btn").on("click", function() {
  //  $(".timer").html("<h1> It's working! </h1>");
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
		console.log(gameState);
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
	// after 5 seconds show next question without user input. 
	// 3 seconds for testing phase
	function nextQuestion() {
		debugger;
		delete questions[0];
		var nextQuestion = setInterval(function() {
			gameState.currentQuestion = questions[0].question;
			gameState.currentAnswer = questions[0].answer;
			$(".question").html(questions[0].question);
			resetQuestions();
			countDown();
			clearTimeout(nextQuestion);
			gameOverYet();
		}, 1000*3)
	}

	function gameOverYet() {
		if (questions.length === 0) {
			endOfQuestions();
		}
	}

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
	/*
	function displayTrivia() {
		// you want one question to show until after it's answered.
		// then another question appears and so forth 
		// until you've answered all questions.
		gameState.currentQuestion = function() {
			for (i = 0; i < questions.lenth; i++){
				$().append(gameState.currentQuestion);
				$().append(gameState.currentOptions);		
			}
		}
	}
	*/


	//==============
	//Initialize/Start
	//==============

	

}