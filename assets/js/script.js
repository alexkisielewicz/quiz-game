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

// Play James Bond Theme
const music = new Audio("assets/audio/bondtheme.mp3");
music.volume = 0.4;

// Button to toggle pause/play Bond Theme
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

// Sounds to play when user gives correct answer
const audioFilesCorrect = [
    "assets/audio/good1.mp3",
    "assets/audio/good2.mp3",
    "assets/audio/good3.mp3",
    "assets/audio/good4.mp3",
    "assets/audio/good5.mp3",
    "assets/audio/good6.mp3",
    "assets/audio/good7.mp3",
    "assets/audio/good8.mp3",
    "assets/audio/good9.mp3",
    "assets/audio/good10.mp3"
]

// Sounds to play when user gives incorrect answer
const audioFilesIncorrect = [
    "assets/audio/wrong1.mp3",
    "assets/audio/wrong2.mp3",
    "assets/audio/wrong3.mp3",
    "assets/audio/wrong4.mp3",
    "assets/audio/wrong5.mp3",
    "assets/audio/wrong6.mp3",
    "assets/audio/wrong7.mp3",
    "assets/audio/wrong8.mp3",
    "assets/audio/wrong9.mp3",
    "assets/audio/wrong10.mp3",
    "assets/audio/wrong11.mp3",
    "assets/audio/wrong12.mp3",
    "assets/audio/wrong13.mp3",
    "assets/audio/wrong14.mp3",
    "assets/audio/wrong15.mp3"
]

// Query DOM for choices and create array with answer buttons
const choices = Array.from(document.getElementsByClassName("choice"));

function showRules() {
  rulesContainer.classList.remove("hide");
  rulesButton.classList.add("hide");
}

function startGame() {
  console.log("Started!");
  rulesContainer.classList.add("hide");
  controlsContainer.classList.add("hide");
  gameContainer.classList.remove("hide");
  music.play();
  availableQuestions = [... allQuestions];
  showQuestion();
}

function correctAnswer() {
  correctSound.play();
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
  }, 2000);
}

function incorrectAnswer() {
  incorrectSound.play();
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
  }, 2000);
}




function showQuestion() {
  console.log("Showing question");
  questionCounter++;



  randomAudioFileCorrect = audioFilesCorrect[Math.floor(Math.random() * audioFilesCorrect.length)];
  correctSound = new Audio(randomAudioFileCorrect);


  
  // Assign random audio file  from incorrect answer sounds
  randomAudioFileIncorrect = audioFilesIncorrect[Math.floor(Math.random() * audioFilesIncorrect.length)];
  incorrectSound = new Audio(randomAudioFileIncorrect);

 
  
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
  console.log('%c Correct answer is option ', 'background: #222; color: #bada55', rightAnswer); 
  
  choices.forEach((choice) => {
    const optionIndex = choice.dataset.answer;
    choice.innerText = currentQuestion["option" + optionIndex];
  });

  // remove used question and feedback sound from the arrays
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
        }, 2000);
      } else {
        // userChoice.classList.add("incorrect");
        // feedback for incorrect answer
        incorrectAnswer();
        setTimeout(() => {
          correctAnswerButton.classList.remove("correct");
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
    console.log("Questions left " + availableQuestions.length );
    
  });
});

// Issues:
// - choices deselect after giving answer - don't know how to do that
// - max possible score is 9 instead of 10 
// - no delay to see if the last 10th question was answered correctly




// FOR README: 
// random audio array idea --> https://stackoverflow.com/questions/27053633/how-to-make-an-array-of-audio-files-randomly-in-javascript
// mp3 source --> https://archive.org/details/tvtunes_6995
// bg png source --> https://www.stickpng.com/
// local storage --> https://lage.us/Javascript-Pass-Variables-to-Another-Page.html
// audio files --> https://tuna.voicemod.net/search?search=bond
// audio files --> https://www.soundboard.com/sb/jamesbond
// audio files --> https://www.voicy.network/
// favicon --> https://icons8.com/ 