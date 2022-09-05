// Wait for the DOM to load first
window.addEventListener('DOMContentLoaded', () => {
   const startButton = document.getElementById("startButton");
   const rulesButton = document.getElementById("rulesButton");
   startButton.addEventListener("click", startGame);
   rulesButton.addEventListener("click", showRules);
});

// get HTML elements to hide/show when game starts
const rulesContainer = document.getElementById("rules");
const controlsContainer = document.getElementById("controls");
const gameContainer = document.getElementById("game");
const question = document.getElementById("question");

let currentQuestion = {};

// Question counter
let questionCounter = document.getElementById("questionCounter");
questionCounter = 0; 
// Allow user to click on the choices
letUserClick = true; 

// Score
let userScore = document.getElementById("score");
userScore = 0;

// Progress bar
const progress = document.getElementById("progress");
let progressBarWidth = 0;

// Play James Bond Theme
const music = new Audio("assets/audio/bondtheme.mp3");
music.volume = 0.4;

// Toggle button to pause/play Bond Theme
const pauseButton = document.getElementById("audioControl");
pauseButton.addEventListener("click", function () {
   if (music.paused) {
      music.play();
      pauseButton.innerHTML = `<i class="fa-solid fa-pause"></i>`;
   } else {
      music.pause();
      pauseButton.innerHTML = ` <i class="fa-solid fa-play"></i>`;
   }
});

// Query DOM for choices and create array with answer buttons
const choices = Array.from(document.getElementsByClassName("choice"));


function showRules() {
   rulesContainer.classList.remove("hide");
   rulesButton.classList.add("hide");
}

/**
 * This function iniciate the game by hiding the buttons from the main screen and showing game interface, qustion and answers. It also plays audio and creates new array with all questions. 
 */
function startGame() {
   console.log("Started!");
   // Hide quiz interface elements in HTML document
   rulesContainer.classList.add("hide");
   controlsContainer.classList.add("hide");
   gameContainer.classList.remove("hide");
   // Play Audio with Bond Theme
   music.play();
   // Create new array with all questions to be able to remove used questions
   availableQuestions = [...allQuestions];
   showQuestion();
}

/**
 * The function is called when user gives correct answer. It increments the score and gives user feedback by playing the sound and changing body background and button colour in the DOM. After short delay it brings back the default style of a document.   
 */
function correctAnswer() {
   console.log('%c Correct answer! ', 'background: #0F0; color: #000');
   // Play audio to give user feedback for correct answer
   correctSound.play();

   // Increment user score
   userScore++;

   // Highlite answer green to give user feedback for correct answer
   correctAnswerButton = (choices[rightAnswer - 1]);
   correctAnswerButton.classList.add("correct");
   
   //feedback for correct answer
   score.innerHTML = `${userScore} <i class="fa-solid fa-star"></i>`;

   // Show image and change background to green - correct answer!
   setTimeout(() => {
      document.body.style.background = "#007B00 url('assets/images/bond.png') no-repeat center";
   }, 100);

   // Remove visual feedback - apply default style 
   setTimeout(() => {
      document.body.style.backgroundColor = "inherit";
      document.body.style.backgroundImage = "";
      correctAnswerButton.classList.remove("correct");
   }, 2000);
}

/**
 * The function is called when user gives incorrect answer. It gives user feedback by playing the sound and changing body background and button colour in the DOM. After short delay it brings back the default style of a document.
 */
function incorrectAnswer() {
   console.log('%c Wrong answer! ', 'background: #F00; color: #FFF');
   // Play audio to give user feedback for incorrect answer
   incorrectSound.play();

   // Highlite answer green to show user correct answer
   correctAnswerButton = (choices[rightAnswer - 1]);
   correctAnswerButton.classList.add("correct");

   // Show image and change background to red - wrong answer!
   setTimeout(() => {
      userChoice.classList.add("incorrect");
      document.body.style.background = "#FF5A5A url('assets/images/blood.png') repeat";
   }, 100);

   // Remove visual feedback - apply default style  
   setTimeout(() => {
      document.body.style.backgroundColor = "inherit";
      document.body.style.backgroundImage = "";
      userChoice.classList.remove("incorrect");
      correctAnswerButton.classList.remove("correct");
   }, 2000);
}

/**
 * Function is called to display the question in HTML document. It gets the random question from the array with all questions and inserts it in the quiz interface together with four answers. The question is removed from the array after user gives the answer. It also changes the width of progress bar in the quiz interface.  
 */
function showQuestion() {
   console.log("Showing random question");

   // Increment question counter
   questionCounter++;

   // Update question counter display
   counter.innerHTML = `<i class="fa-solid fa-circle-question"></i> ${questionCounter}/10`;

   // Update progress bar display by 10% for each questione
   progressBarWidth += 10;
   progress.style.width = progressBarWidth + "%";
   
   // Get random audio file from all "Correct answer" sounds and assign to variable
   randomAudioFileCorrect = audioFilesCorrect[Math.floor(Math.random() * audioFilesCorrect.length)];
   correctSound = new Audio(randomAudioFileCorrect);
   console.log("random CORRECT audio file to be played: " + randomAudioFileCorrect);

   // Get random audio file from all "Incorrect answer" sounds and assign to variable
   randomAudioFileIncorrect = audioFilesIncorrect[Math.floor(Math.random() * audioFilesIncorrect.length)];
   incorrectSound = new Audio(randomAudioFileIncorrect);
   console.log("random INCORRECT audio file to be played: " + randomAudioFileIncorrect);

   // Get random question from the array with all questions (in questions.js)
   questionIndex = Math.floor(Math.random() * availableQuestions.length);
   currentQuestion = availableQuestions[questionIndex];
   // Display question in HTML document
   question.innerText = currentQuestion.question;

   // Show correct answer in the console for developer's easy reference
   // TODO: remove this before release
   rightAnswer = currentQuestion.answer;
   console.log('%c Correct answer is option ', 'background: #222; color: #bada55', rightAnswer);

   // Insert answer options from the array into the buttons in HTML document 
   choices.forEach((choice) => {
      optionIndex = choice.dataset.answer;
      choice.innerText = currentQuestion["option" + optionIndex];
   });

   // Remove used question from the array
   availableQuestions.splice(questionIndex, 1);
   // Enable buttons so user can pick the choices
   enableDisableButtons(null, false) 
   letUserClick = true;
}

/** 
 * This function adds event listeners for user's clicks on the answer buttons and also checks if user picked correct answer. Function showing next question is called with delay so user is able to see visual feedback after giving answer. The score value is saved in local storage for further use on game result page. 
 */
function computeAnswer(event) {
   // Add event listener for choice buttons (data-answer="x")
   userChoice = event.target;
   userAnswer = userChoice.dataset.answer;

   // Check if user answer equals correct answer
   if (userAnswer == currentQuestion.answer) {
      correctAnswer();
   } else {
      incorrectAnswer(userChoice);
   }
   
   setTimeout(() => {
    showQuestion();
   }, 2000);

   // Declare variable to store the score in the local storage
   gameResult = userScore;
   sessionStorage.setItem("gameresult", gameResult);
}

/** 
 * The function queries the DOM for answer buttons and disable/enable them after user gives answer. That prevents user from clicking on other buttons before answer is checked and feedback is displayed. 
 * Further description available in Readme, bugs section.  
 * Mentor - Reuben Ferrante edited this function and helped to fix the issue with multiple-selection of a buttons.  
 */
function enableDisableButtons(event, disable = true) {
   allButtons = document.getElementsByClassName("button choice");
   for (i=0; i < allButtons.length; i++) {
      // increasing i by 1 because of the index
      if (disable) {
         if ((i + 1).toString() !== event.target.dataset.answer) {
            // disable the rest of the buttons
            allButtons[i].setAttribute("disable", "");
         }
      }
      else {
         allButtons[i].removeAttribute("disable");
      }
   }
};

/** 
 * For each method is used to add event listeners for user clicks on the choices. If buttons are enabled it disables them after user click. This prevents user from clicking on other choices and displaying feedback multiple times. There are 20 questions in the array and user answers 10 random questions. When user answers the last tenth question the quiz ends and score button is displayed.    
 * Mentor - Reuben Ferrante edited the code with first "if" condition.  
 */
choices.forEach((choice) => {
   choice.addEventListener("click", (event) => {
      // In case the user clicks again, check for disable attribute
      if (letUserClick && event.target.getAttribute("disable") !== '') {
         enableDisableButtons(event);
         console.log("Score is: " + userScore);
         // Taking a sample of 10/20 questions
         // TODO This needs to be moved to showQuestions
         if (availableQuestions.length == 10) {
            alert("Your score is: " + userScore);
            //return window.location.href = "score.html";
         } 
         computeAnswer(event);
         console.log("Questions left in the array: " + availableQuestions.length);
      }

      letUserClick = false

   });
});