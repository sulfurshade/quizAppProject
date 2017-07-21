const QUIZ_INTRO_BUTTON = ".intro-button";
const QUIZ_INTRO_BOX = ".intro-box";
const QUIZ_QUESTIONS_BOX = ".questions-box";
const QUIZ_RESULTS_BOX = ".results-box";
const QUIZ_SUBMIT_BUTTON = "#submit-button";
const QUIZ_RESULTS = "#quiz-results";
const QUIZ_RESULTS_TEXT = ".results-text";
const QUIZ_MODAL_POPUP = ".modal";
const QUIZ_MODAL_CLOSE = ".close-button";
const QUIZ_MODAL_PIC = ".modal-pic";
const QUIZ_MODAL_TEXT = '.modal-text';

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
    ],
    rightAnswer: 2
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
    rightAnswer: 1
  },
  {
    question: "In our solar system which two planets rotate clockwise?", //question THREE 3
    answers: [
      "Saturn & Mars",
      "Earth & Jupiter",
      "Mercury & Pluto",
      "Venus & Uranus"
    ],
    rightAnswer: 3
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
    rightAnswer: 1
  },
  {
    question: "What’s the 13th digit (after the decimal point) of π? (pi)", //question FIVE 5
    answers: [
      "4",
      "2",
      "0",
      "7"
    ]
    ,
    rightAnswer: 3
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
    rightAnswer: 1
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
    rightAnswer: 2
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
    rightAnswer: 0
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
    rightAnswer: 0
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
    rightAnswer: 3
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
    rightAnswer: 0
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
    rightAnswer: 2
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
    rightAnswer: 0
  }
]

var results = ["Wow, a perfect score! You are a true geek, gifted in all ways of geek knowledge.", 
               "Awesome, you are pretty geek, but you still have a bit to learn.", 
               "You are a geek in your own way. However, you have a bit more to go if you want to become a real geek.", 
               "You are definitely not a true geek, but atleast you have a basic understanding of what it means to be one.", 
               "Not even close! You tried, but Yoda would be very disgusted.", 
               "Wow, a 0. Do you even KNOW what Star Wars is??"]

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
  
  if (answerChoice === undefined) {
    answerPopup('unanswered');
    return;
  }
  
  if (Number(answerChoice) === correctAnswer) {
    correctCount++;
    answerPopup('correct');  
  } else {
    answerPopup('incorrect');
  }
  currentQuestion++;
}

function displayQuestion(questionNumber) {
  var currentQuestion = questions[questionNumber];
  $("#quiz-question").text(currentQuestion.question);
  for (var i = 0; i < currentQuestion.answers.length; i++) {
    $("#quiz-answer" + i).find('span').text(currentQuestion.answers[i]);
  }
  $('input[name="radio-choice"]').prop('checked', false);
}

function answerPopup(userInput) {
  if (userInput === 'unanswered') {
    return;
  }
  if (userInput === 'correct') {
    $(QUIZ_MODAL_POPUP).removeClass('hidden');
    $(QUIZ_MODAL_PIC).attr("src", "https://media.giphy.com/media/Tcr6ZB3wcvG5q/giphy.gif");
    $(QUIZ_MODAL_TEXT).text("You got it right, nice one!");
    
  } else {
    $(QUIZ_MODAL_POPUP).removeClass('hidden');
    $(QUIZ_MODAL_PIC).attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Sad_face.gif/1024px-Sad_face.gif");
    $(QUIZ_MODAL_TEXT).text("Uh oh, you got it wrong...");
  }
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
  
  $(QUIZ_MODAL_CLOSE).click(function() {
    $(QUIZ_MODAL_POPUP).addClass('hidden');
  });
  displayQuestion(0);
});

var modal = document.getElementById('popup-modal');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}