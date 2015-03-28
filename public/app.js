var app = angular.module('FlashCards', []);

app.controller('FlashCardController', function($scope) {
	

	$scope.flashCard = {
	    question: 'What is Angular?',
	    answers: [
	        { text: 'A front-end framework for great power!', correct: true },
	        { text: 'Something lame, who cares, whatever.', correct: false },
	        { text: 'Some kind of fish, right?', correct: false }
	    ]
	};

	$scope.answerQuestion = function (answer) {
		$scope.answered=true;

		if (answer.correct === true) {
			$scope.answeredCorrectly=true;
		} else {
			$scope.answeredCorrectly=false;
		}
	}

});

app.controller('MainController', function($scope) {
	
	$scope.flashCards = [
	    {
	        question: 'What is Angular?',
	        answers: [
	            { text: 'A front-end framework for great power!', correct: true },
	            { text: 'Something lame, who cares, whatever.', correct: false },
	            { text: 'Some kind of fish, right?', correct: false }
	        ]
	    },
	    {
	        question: 'What is a controller?',
	        answers: [
	            { text: 'Something that manages my front-end routes', correct: false },
	            { text: 'A function that allows me to manage a scope', correct: true },
	            { text: 'An Angular template', correct: false }
	        ]
	    },
	    {
	        question: 'What does {{ }} do?',
	        answers: [
	            { text: 'It runs some Javascript', correct: false },
	            { text: 'It looks for variables in HTML', correct: false },
	            { text: 'It runs an Angular expression that accesses my $scope', correct: true }
	        ]
	    }
	];

	// By passing in 2nd argument 'flashcard' we have a reference to the local flashcard object that is used in the repeated card.
	$scope.answerQuestion = function (answer, flashcard) {
		flashcard.answered=true;

		if (answer.correct === true) {
			flashcard.answeredCorrectly=true;
		} else {
			flashcard.answeredCorrectly=false;
		}
		console.log(flashcard);
	}

});