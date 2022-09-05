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

   // Get random audio file from all "Incorrect answer" sounds and assign to variable
   randomAudioFileIncorrect = audioFilesIncorrect[Math.floor(Math.random() * audioFilesIncorrect.length)];
   incorrectSound = new Audio(randomAudioFileIncorrect);

   // Get random question from the array with all questions (in questions.js)
   questionIndex = Math.floor(Math.random() * availableQuestions.length);
   currentQuestion = availableQuestions[questionIndex];
   // Display question in HTML document
   question.innerText = currentQuestion.question;

   // Show correct answer in the console for developer's easy reference
   rightAnswer = currentQuestion.answer;
   console.log('%c Correct answer is option ', 'background: #222; color: #bada55', rightAnswer);

   // Insert answer options from the array into the buttons in HTML document 
   choices.forEach((choice) => {
      optionIndex = choice.dataset.answer;
      choice.innerText = currentQuestion["option" + optionIndex];
   });

   // Remove used question from the array
   availableQuestions.splice(questionIndex, 1);

}


function computeAnswer() {
   // Add event listener for choice buttons (data-answer="x")
   userChoice = event.target;
   userAnswer = userChoice.dataset.answer;

   // Check if user answer equals correct answer
   if (userAnswer == currentQuestion.answer) {
      correctAnswer();
      setTimeout(() => {
         showQuestion();
      }, 2000);
   } else {
      incorrectAnswer();
      setTimeout(() => {
         showQuestion();
      }, 2000);
   }
   gameResult = userScore;
   sessionStorage.setItem("gameresult", gameResult);
}


choices.forEach((choice) => {
   choice.addEventListener("click", () => {

      if (availableQuestions.length >= 11) {

         computeAnswer();

      } else {

         return window.location.href = "score.html";
         //return alert("Your score is" + " " + gameResult);
      }
      console.log("Questions left in the array: " + availableQuestions.length);

   });
});


// Issues:
// - choices stays selected on touch devices (can see it in DevTools too)
// - max possible score is 9 instead of 10 
// - no delay to see if the last 10th question was answered correctly
// - clicking should be disabled after choice is clicked


// FOR README: 
// random audio array idea --> https://stackoverflow.com/questions/27053633/how-to-make-an-array-of-audio-files-randomly-in-javascript
// mp3 source --> https://archive.org/details/tvtunes_6995
// bg png source --> https://www.stickpng.com/
// local storage --> https://lage.us/Javascript-Pass-Variables-to-Another-Page.html
// audio files --> https://tuna.voicemod.net/search?search=bond
// audio files --> https://www.soundboard.com/sb/jamesbond
// audio files --> https://www.voicy.network/
// favicon --> https://icons8.com/