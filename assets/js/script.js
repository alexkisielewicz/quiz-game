// wait for DOM to load first
document.addEventListener("DOMContentLoaded", function () {
  let startButton = document.getElementById("startButton");
  startButton.addEventListener("click", startGame);
});

// get HTML elements to hide/show when game starts
const controlsContainer = document.getElementById("controls");
const gameContainer = document.getElementById("game");
const question = document.getElementById("question");

let currentQuestion = {};

let music = new Audio("assets/audio/bondtheme.mp3");
// audio pause option to be added

// Question counter
let questionCounter = document.getElementById("questionCounter");
questionCounter = 0;

// Score
let userScore = document.getElementById("score");
userScore = 0;

// Progress bar
let progress = document.getElementById("progress");
let width = 0;

// Background
let background = document.getElementsByTagName("body");

// Mute audio
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

// Choices
const choices = Array.from(document.getElementsByClassName("choice"));
let answer1 = document.querySelector('[data-answer="1"]');
let answer2 = document.querySelector('[data-answer="2"]');
let answer3 = document.querySelector('[data-answer="3"]');
let answer4 = document.querySelector('[data-answer="4"]');

function correctAnswer() {
  userScore++;
  console.log("Score is " + userScore);
  setTimeout(() => {
    document.body.style.background =
      "#007B00 url('assets/images/bond.png') no-repeat center";
  }, 100);

  setTimeout(() => {
    document.body.style.backgroundColor = "inherit";
    document.body.style.backgroundImage = "";
  }, 800);
}

function incorrectAnswer() {
  setTimeout(() => {
    document.body.style.background =
      "#FF0000 url('assets/images/blood.png') repeat";
  }, 100);

  setTimeout(() => {
    document.body.style.backgroundColor = "inherit";
    document.body.style.backgroundImage = "";
  }, 800);
}

function startGame() {
  controlsContainer.classList.add("hide");
  gameContainer.classList.remove("hide");
  music.play();
  availableQuestions = [...allQuestions];
  showQuestion();
}

function showQuestion() {
  questionCounter++;

  // update progress bar display
  width += 10;
  progress.style.width = width + "%";

  // update score display
  counter.innerHTML = `<i class="fa-solid fa-circle-question"></i> ${questionCounter}/10`;

  // get random question from all questions
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const optionIndex = choice.dataset["answer"];
    choice.innerText = currentQuestion["option" + optionIndex];
  });

  // remove shown question from available questions array
  availableQuestions.splice(questionIndex, 1);
}

choices.forEach((choice) => {
  choice.addEventListener("click", (event) => {
    if (availableQuestions.length >= 11) {
      let userChoice = event.target;
      let userAnswer = userChoice.dataset["answer"];
      if (userAnswer == currentQuestion["answer"]) {
        // feedback when answer is correct
        correctAnswer();
        score.innerHTML = `${userScore} <i class="fa-solid fa-star"></i>`;
        setTimeout(() => {
          showQuestion();
        }, 1000);
      } else {
        // feedback when answer is incorrect
        incorrectAnswer();
        setTimeout(() => {
          showQuestion();
        }, 1000);
      }
    } else {
      return window.location.href = "score.html";
      //return alert("Your score is" + " " + gameResult);
    }

    gameResult = userScore;
    sessionStorage.setItem("gameresult", gameResult);
    console.log(gameResult);
  });
});

// Issues:
// - choices deselect - doesn't work
// - max possible score is 9 instead of 10
// - no delay to see if the last 10th question was answered correctly

// mp3 source https://archive.org/details/tvtunes_6995
// bg png https://www.stickpng.com/
