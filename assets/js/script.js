// wait for DOM to load first
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
let progress = document.getElementById("progress");
let width = 0;

// Play audio with pause option
const music = new Audio("assets/audio/bondtheme.mp3");
music.volume = 0.4;
// const good = new Audio("assets/audio/good1.mp3");
// const wrong = new Audio("assets/audio/wrong1.mp3");


const audioFilesGood = [
    "assets/audio/good1.mp3",
    "assets/audio/good2.mp3",
    "assets/audio/good3.mp3",
    "assets/audio/good4.mp3",
    "assets/audio/good5.mp3",
]

const audioFilesWrong = [
    "assets/audio/wrong1.mp3",
    "assets/audio/wrong2.mp3",
    "assets/audio/wrong3.mp3",
    "assets/audio/wrong4.mp3",
    "assets/audio/wrong5.mp3",
    "assets/audio/wrong6.mp3",
    "assets/audio/wrong7.mp3",
    "assets/audio/wrong8.mp3",
]

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
let answer1 = document.querySelector('[data-answer="1"]');
let answer2 = document.querySelector('[data-answer="2"]');
let answer3 = document.querySelector('[data-answer="3"]');
let answer4 = document.querySelector('[data-answer="4"]');

function showRules() {
  rulesContainer.classList.remove("hide");
  rulesButton.classList.add("hide");
}

function correctAnswer() {
  good.play();
  userScore++;
  correctAnswerButton = (choices[rightAnswer - 1]);
  correctAnswerButton.classList.add("correct");
  
  setTimeout(() => {
    document.body.style.background = "#007B00 url('assets/images/bond.png') no-repeat center";
  }, 100);

  setTimeout(() => {
    document.body.style.backgroundColor = "inherit";
    document.body.style.backgroundImage = "";
    correctAnswerButton.classList.remove("correct");
  }, 800);
}

function incorrectAnswer() {
  wrong.play();
  correctAnswerButton = (choices[rightAnswer - 1]);
  correctAnswerButton.classList.add("correct");
  setTimeout(() => {
    userChoice.classList.add("incorrect");
    document.body.style.background = "#FF5A5A url('assets/images/blood.png') repeat";
  }, 100);

  setTimeout(() => {
    document.body.style.backgroundColor = "inherit";
    document.body.style.backgroundImage = "";
    userChoice.classList.remove("incorrect");
    correctAnswerButton.classList.remove("correct");
  }, 800);
}

function startGame() {
  rulesContainer.classList.add("hide");
  controlsContainer.classList.add("hide");
  gameContainer.classList.remove("hide");
  music.play();
  availableQuestions = [...allQuestions];
  showQuestion();
}

function showQuestion() {
  questionCounter++;

  let randomAudioFileGood = audioFilesGood[Math.floor(Math.random() * audioFilesGood.length)];
  good = new Audio(randomAudioFileGood);
  console.log(randomAudioFileGood);

  let randomAudioFileWrong = audioFilesWrong[Math.floor(Math.random() * audioFilesWrong.length)];
  wrong = new Audio(randomAudioFileWrong);
  console.log(randomAudioFileWrong);



  // update progress bar display
  width += 10;
  progress.style.width = width + "%";

  // update score display
  counter.innerHTML = `<i class="fa-solid fa-circle-question"></i> ${questionCounter}/10`;

  // get random question from all questions
  questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  
  rightAnswer = currentQuestion.answer;
  console.log("Correct answer is option " + rightAnswer); 
  
  choices.forEach((choice) => {
    const optionIndex = choice.dataset.answer;
    choice.innerText = currentQuestion["option" + optionIndex];
  });
  
  removeUsedQuestion();
  // remove shown question from available questions array
  
}

function removeUsedQuestion() {
  availableQuestions.splice(questionIndex, 1);
}


function computeAnswer() {
      userChoice = event.target;
      userAnswer = userChoice.dataset.answer;
      
      
  if (userAnswer == currentQuestion.answer) {
        correctAnswer();
        //feedback for correct answer
        score.innerHTML = `${userScore} <i class="fa-solid fa-star"></i>`;
        
        setTimeout(() => {
          correctAnswerButton.classList.remove("correct");
          showQuestion();
        }, 1000);
      } else {
        // userChoice.classList.add("incorrect");
        // feedback for incorrect answer
        incorrectAnswer();
        setTimeout(() => {
          correctAnswerButton.classList.remove("correct");
          showQuestion();
        }, 1000);
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
    console.log(availableQuestions.length);
    
  });
});


// correctAnswerButton = (choices[rightAnswer - 1]);

// Issues:
// - choices deselect after giving answer - don't know how to do that
// - max possible score is 9 instead of 10 
// - no delay to see if the last 10th question was answered correctly


// random audio array idea --> https://stackoverflow.com/questions/27053633/how-to-make-an-array-of-audio-files-randomly-in-javascript
// mp3 source --> https://archive.org/details/tvtunes_6995
// bg png source --> https://www.stickpng.com/
// local storage --> https://lage.us/Javascript-Pass-Variables-to-Another-Page.html
