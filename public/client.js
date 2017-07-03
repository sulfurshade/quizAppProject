const QUIZ_INTRO_BUTTON = ".intro-button";
const QUIZ_INTRO_BOX = ".intro-box";
const QUIZ_QUESTIONS_BOX = ".questions-box";
const QUIZ_RESULTS_BOX = ".results-box";

function handleQuizApp() {
  // all event listeners here
  $(QUIZ_INTRO_BUTTON).on("click", event => {
    $(QUIZ_INTRO_BOX).addClass('hidden');
    $(QUIZ_QUESTIONS_BOX).removeClass('hidden');
    // intro question results
  });
  
  // 1. Do the same for results
  // 2. HTML Wireframe
  
}

$(handleQuizApp);