const QUIZ_INTRO_BUTTON = ".intro-button";
const QUIZ_INTRO_BOX = ".intro-box";
const QUIZ_QUESTIONS_BOX = ".questions-box";
const QUIZ_RESULTS_BOX = ".results-box";
const QUIZ_SUBMIT_BUTTON = "#submit-button";
const QUIZ_RESULTS = "#quiz-results";
const QUIZ_RESULTS_TEXT = ".results-text"

var correctCount = 0;
var currentQuestion = 0;

var questions = [
  {
    question: "1,024 Gigabytes is equal to one what?", //question ONE 1
    answers: [
      "Megabyte",
      "Kilobyte",
      "Terabyte",
      "Uberbyte"
    ]
    ,
    rightAnswer: 2  //compare index of user answer to rightAnswer
  },
  {
    question: "Who orchestrated the original 3 Star Wars films?", //question TWO 2
    answers: [
      "John Williams",
      "Herbert W. Spencer",
      "Danny Elfman",
      "Bernard Herrmann"
    ]
    ,
    rightAnswer: 1  //compare index of user answer to rightAnswer
  },
  {
    question: "In our solar system which two planets rotate clockwise?", //question THREE 3
    answers: [
      "Saturn & Mars",
      "Earth & Jupiter",
      "Mercury & Pluto",
      "Venus & Uranus"
    ],
    rightAnswer: 3  //compare index of user answer to rightAnswer
  },
  {
    question: "Which of these actors has NOT played Batman?", //question FOUR 4
    answers: [
      "Adam West",
      "Kevin Costner",
      "Lewis G Wilson",
      "Michael Keaton"
    ]
    ,
    rightAnswer: 1  //compare index of user answer to rightAnswer
  },
  {
    question: "What’s the eighth digit (after the decimal point) of π? (pi)", //question FIVE 5
    answers: [
      "4",
      "2",
      "0",
      "7"
    ]
    ,
    rightAnswer: 3  //compare index of user answer to rightAnswer
  },
  {
    question: "What is the most abundant element in the earth's atmosphere?", //question SIX 6
    answers: [
      "Oxygen",
      "Nitrogen",
      "Hydrogen",
      "Helium"
    ]
    ,
    rightAnswer: 1  //compare index of user answer to rightAnswer
  },
  {
    question: "What does HTTP stand for in a website address?", //question SEVEN 7
    answers: [
      "HyperText Transfer Page",
      "Hyper Transfer To Page",
      "HyperText Transfer Protocol",
      "HyperText Trailing Protocol"
    ]
    ,
    rightAnswer: 2  //compare index of user answer to rightAnswer
  },
  {
    question: "What are the four houses at Hogwarts School of Witchcraft and Wizardry?", //question EIGHT 8
    answers: [
      "Gryffindor, Ravenclaw, Hufflepuff, & Slytherin",
      "Tatooine, Hoth, Coruscant & Naboo",
      "Hobbits, Dwarves, Elves & Orcs",
      "Granger, Weasley, Voldemort & Dumbledore"
    ]
    ,
    rightAnswer: 0  //compare index of user answer to rightAnswer
  },
  {
    question: "Which of these famous people did NOT cameo in The Fifth Element?", //question NINE 9
    answers: [
      "Luc Besson",
      "Jean-Paul Gaultier",
      "Lee Evans",
      "Mac McDonald"
    ]
    ,
    rightAnswer: 0  //compare index of user answer to rightAnswer
  },
  {
    question: "What is the name of the main protagonist in the Legend of Zelda series of video games?", //question TEN 10
    answers: [
      "Zelda",
      "Mario",
      "Samus",
      "Link"
    ]
    ,
    rightAnswer: 3  //compare index of user answer to rightAnswer
  },
  {
    question: "How many pairs of chromosomes are in found in the average human?", //question 11
    answers: [
      "Twenty-three",
      "Forty-two",
      "Forty-six",
      "Thirty-four"
    ]
    ,
    rightAnswer: 0  //compare index of user answer to rightAnswer
  },
  {
    question: "What does the acronym \"NASA\" stand for?", //question 12
    answers: [
      "National Association of Space Aerodynamics",
      "National Astronaut Space Agenda",
      "National Aeronautics and Space Administration",
      "National Academy Searching for Aliens"
    ]
    ,
    rightAnswer: 2  //compare index of user answer to rightAnswer
  },
  {
    question: "When referring to computers, what does that acronym RAM stand for?", //question 13
    answers: [
      "Random Access Memory",
      "Repair and Maintenance",
      "Remote Analysis Multiplexer",
      "Restricted-Access Media"
    ]
    ,
    rightAnswer: 0  //compare index of user answer to rightAnswer
  }
]

var results = ["You got 13 yay", "You got 10-12 yay", "You got 7-9 yay", "You got 4-6 yay", "You got 1-3 yay", "You got 0 yay"]

function showScore() {
  $(QUIZ_QUESTIONS_BOX).addClass("hidden");
  $(QUIZ_RESULTS_BOX).removeClass("hidden");
  $(QUIZ_RESULTS).find('span').text("You got " + correctCount + " out of 13 correct!");
  if (correctCount === 13) {
    $(QUIZ_RESULTS_TEXT).find('span').text(results[0]);
  } else if (correctCount > 9) {
    $(QUIZ_RESULTS_TEXT).find('span').text(results[1]);
  } else if (correctCount > 6) {
    $(QUIZ_RESULTS_TEXT).find('span').text(results[2]);
  } else if (correctCount > 3) {
    $(QUIZ_RESULTS_TEXT).find('span').text(results[3]);
  } else if (correctCount > 0) {
    $(QUIZ_RESULTS_TEXT).find('span').text(results[4]);
  } else {
    $(QUIZ_RESULTS_TEXT).find('span').text(results[5]);
  }
}// 13 10-12 7-9 4-6 1-3 0

function checkAnswer(answerChoice) {
  var correctAnswer = questions[currentQuestion].rightAnswer;
  if (answerChoice == correctAnswer) {
    correctCount++;
    answerPopup(true);
    currentQuestion++;
  } else if (answerChoice == undefined) {
    answerPopup('unanswered');
  } else {
    answerPopup(false);
    currentQuestion++;
  }
}

function displayQuestion(questionNumber) {
  var currentQuestion = questions[questionNumber];
  $("#quiz-question").text(currentQuestion.question);
  for (var i = 0; i < currentQuestion.answers.length; i++) {
    $("#quiz-answer" + i).find('span').text(currentQuestion.answers[i]);
  }
  $('input[name="radio-choice"]').prop('checked', false);
}

function answerPopup() {
  
}

$(function () {
 // Setup listeners
  $(QUIZ_INTRO_BUTTON).click(function (e) {
    $(QUIZ_INTRO_BOX).addClass("hidden");
    $(QUIZ_QUESTIONS_BOX).removeClass("hidden");
  });
  
  $(QUIZ_SUBMIT_BUTTON).click(function (e) {
    e.preventDefault();
    var answerChoice = $('input[name="radio-choice"]:checked').val();
    checkAnswer(answerChoice);
    
    if (currentQuestion < questions.length) {
      displayQuestion(currentQuestion);
    } else {
      showScore();
    }
  });
  displayQuestion(0);
});

// // @param {String} name - input your name here
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function printAnswers(question){
//   var answersHtml = [];
//   var index = getRandomInt(0, 3);
//   answersHtml[index] = question.correctAnswer;

//   var arrayIndex = 0;
//   for (var i = 0; i < 3; i++) {
//     if (!answersHtml[arrayIndex]) {
//       answersHtml[arrayIndex++] = question.wrongAnswers[i];
//     }
//     else {
//       answersHtml[++arrayIndex] = question.wrongAnswers[i];
//     }
//   }
//   console.log(answersHtml);
// }

// printAnswers(questions[0])

// function handleQuizApp() {
//   // all event listeners here
//   $(QUIZ_INTRO_BUTTON).on("click", event => {
//     $(QUIZ_INTRO_BOX).addClass('hidden');
//     $(QUIZ_QUESTIONS_BOX).removeClass('hidden');
//     // intro question results
//     var cAnswer = questions[0].correctAnswer;
//     $("#quiz-questions").text(questions[0].question);
//     $("#quiz-answers1").html('<input type="radio" value="0" name="radio-choice" />' + testVar);
//     $("#quiz-answers2").html('<input type="radio" value="0" name="radio-choice" />Hello world!11');
//     $("#quiz-answers3").html('<input type="radio" value="0" name="radio-choice" />Hello world!11');
//     $("#quiz-answers4").html('<input type="radio" value="0" name="radio-choice" />Hello world!11');
//   });

// 1. Do the same for results
// 2. HTML Wireframe
// 3. Write all your questions.
// 4. Showing questions dynamically (Next Question)

// }

// $(handleQuizApp);

// $( "# your form id" ).submit(function( event ) {

//   event.preventDefault();
//   console.log("show next question")
// });

// document ready - intro div
// start button - hide intro div - show quiz div
// for loop: load in q1 - radio select - button shows popup - iterates to q2 - repeat until 10
// upon completion, button hides quiz div - shows results div
// results screen is shown