// wait for DOM to load first
document.addEventListener("DOMContentLoaded", function() {
  let startButton = document.getElementById("startButton");
  startButton.addEventListener("click", startGame);
}); 

// get HTML elements to hide/show when game starts
const controlsContainer = document.getElementById("controls");
const gameContainer = document.getElementById("game");
const question = document.getElementById("question");

let currentQuestion = {};
let acceptingAnswers = false;

let music = new Audio("assets/audio/bondtheme.mp3");
// audio pause option to be added

// Question counter
let questionCounter = document.getElementById("questionCounter");
questionCounter = 0;

// Score
let userScore = document.getElementById("score");

// Progress bar
let progress = document.getElementById("progress");
let width = 0;

// Background
let background = document.getElementsByTagName("body");

// Choices 
const choices = Array.from(document.getElementsByClassName("choice"));
let answer1 = document.querySelector('[data-answer="1"]');
let answer2 = document.querySelector('[data-answer="2"]');
let answer3 = document.querySelector('[data-answer="3"]');
let answer4 = document.querySelector('[data-answer="4"]');

function correctAnswer() { 
setTimeout( () => {
document.body.style.backgroundColor = "green";        
}, 100); 

setTimeout( () => {
document.body.style.backgroundColor = "inherit";        
}, 800); 
};

function incorrectAnswer() { 
setTimeout( () => {
document.body.style.backgroundColor = "red";        
}, 100); 

setTimeout( () => {
document.body.style.backgroundColor = "inherit";        
}, 800); 
}; 

// 20 questions array
const allQuestions = [
  {
    question: "What is James Bond's Secret Service Agent code name?", 
    option1: "006", 
    option2: "007", 
    option3: "009",
    option4: "777",
    answer: 2
  },

  {
    question: "What brand of car is Bond most often associated with?", 
    option1: "Jaguar", 
    option2: "Bentley", 
    option3: "Aston Martin",
    option4: "Rolls-Royce",
    answer: 3
  },

  {
    question: "What was the first Bond film released in cinema?", 
    option1: "Dr No", 
    option2: "Goldfinger", 
    option3: "Moonraker",
    option4: "Thunderball",
    answer: 1
  },
  
  {
    question: "Who was the first actor to portray James Bond on film?", 
    option1: "George Lazenby", 
    option2: "Sean Connery", 
    option3: "Timoty Dalton",
    option4: "Roger Moore",
    answer: 2
  },

  {
    question: "From whose novels are the James Bond movies originally adapted?", 
    option1: "Ian Fleming", 
    option2: "Henry Porter", 
    option3: "John Altman",
    option4: "John le Carre",
    answer: 1
  },

  {
    question: "How does Bond prefer his martini?", 
    option1: "Dirty", 
    option2: "On the rocks", 
    option3: "Shaken, not stirred",
    option4: "With a twist",
    answer: 3
  },

  {
    question: "Which of Bond's many enemies notably owned a white cat?", 
    option1: "Ernst Stavro Blofeld", 
    option2: "Auric Goldfinger", 
    option3: "Le Chiffre",
    option4: "Jaws",
    answer: 1
  },

  {
    question: "Who sings the latest Bond theme in No Time to Die?", 
    option1: "Lorde", 
    option2: "Adele", 
    option3: "Billie Eilish",
    option4: "Alicia Keys",
    answer: 3
  },

  {
    question: "How many films has Daniel Craig played Bond in to date?", 
    option1: "3", 
    option2: "4", 
    option3: "5",
    option4: "6",
    answer: 3
  },

  {
    question: "Which of the following actresses has NOT appeared as a 'Bond Girl'?", 
    option1: "Halle Berry", 
    option2: "Charlize Theron", 
    option3: "Rosamund Pike",
    option4: "Michelle Yeoh",
    answer: 2
  },

  {
    question: "In which country was Bond actor Pierce Brosnan born?", 
    option1: "Northern Ireland", 
    option2: "Republic of Ireland", 
    option3: "Scotland",
    option4: "United States of America",
    answer: 2
  },

  {
    question: "What was Daniel Craig's first Bond film?", 
    option1: "Skyfall", 
    option2: "Quantum of Solace", 
    option3: "Casino Royale",
    option4: "Spectre",
    answer: 3
  },

  {
    question: "Whom does James Bond work for?", 
    option1: "MI 5", 
    option2: "MI 6", 
    option3: "SAS",
    option4: "Ministry of Defence",
    answer: 2
  },

  {
    question: "What was the only Bond theme song to reach No. 1 on the U.S. Billboard chaarts?", 
    option1: "Carly Simon's 'Nobody Does it Better'", 
    option2: "Duran Duran's 'A View to a Kill'", 
    option3: "Paul Mc Cartney's 'Live and Let Die'",
    option4: "Adele's 'Skyfall'",
    answer: 2
  },

  {
    question: "Wich Bond film has won the most Academy Awards?", 
    option1: "Skyfall", 
    option2: "Casino Royale", 
    option3: "No Time to Die",
    option4: "Quantuum of Solace",
    answer: 1
  },

  {
    question: "Who is the only Bond actor to drop to one knee during their opening gun-barrel sequence?", 
    option1: "Roger Moore", 
    option2: "Timothy Dalton ", 
    option3: "Sean Connery",
    option4: "George Lazenby",
    answer: 4
  },

  {
    question: "How many actors have played M in the official James Bond film series?", 
    option1: "2", 
    option2: "3", 
    option3: "4",
    option4: "5",
    answer: 3
  },

  {
    question: "Which 00 agent is murdered early on Octopussy (1983)?", 
    option1: "002", 
    option2: "004", 
    option3: "008",
    option4: "009",
    answer: 4
  },

  {
    question: "What type of pistol has Bond is most associated with?", 
    option1: ".357 Magnum", 
    option2: "Walther PPK", 
    option3: "Colt 1911",
    option4: "FN Five-Seven",
    answer: 2
  },

  {
    question: "In which 2002 Bond film would you find Halle Berry as Bond girl Jinx?", 
    option1: "Die Another Day", 
    option2: "The Living Daylights", 
    option3: "Tomorrow Never Dies",
    option4: "The World in Not Enough",
    answer: 1
  }
] 

function startGame() {
  controlsContainer.classList.add("hide");
  gameContainer.classList.remove("hide");

  music.play();
  availableQuestions = [... allQuestions];
  userScore = 0;
  showQuestion()
}

function showQuestion() {
  questionCounter++;
  
  // deselect all choices - DOESN'T WORK
  choices.forEach(choice => {
  choices.selected = false;
  console.log(choices.selected);
 });
  
  // update progress bar display
  width += 10;
  progress.style.width = width + "%";
 
 // update score display
  counter.innerHTML = `<i class="fa-solid fa-circle-question"></i> ${questionCounter}/10`;

  // get random question from all questions
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  
 choices.forEach(choice => {
  const optionIndex = choice.dataset["answer"];
  choice.innerText = currentQuestion["option" + optionIndex];
 });

 // remove shown question from available questions array
  availableQuestions.splice(questionIndex, 1);
  allowUserAnswer = true;
};


choices.forEach(choice => {
  choice.addEventListener("click", event => {
    
    if (availableQuestions.length > 10) {
      allowUserAnswer = true;
    } else {
      return window.location.href = "score.html";
    }

    const userChoice = event.target;
    const userAnswer = userChoice.dataset["answer"];
    
    if (userAnswer == currentQuestion["answer"]) {
      ++userScore;
      score.innerHTML = `${userScore} <i class="fa-solid fa-star"></i>`;

      // feedback when answer is correct
      correctAnswer();
      showQuestion();
    } else {
      // feedback when answer is incorrect
      incorrectAnswer();
      showQuestion();
    };

    console.log(userScore);
    console.log(typeof userScore);

    gameResult = userScore;
    sessionStorage.setItem("gameresult", gameResult);

    console.log(gameResult);
    
  })
});

let gameResult = userScore;
sessionStorage.setItem("gameresult", gameResult);



// Issues:
// - choices deselect - doesn't work
// - max possible score is 9 instead of 10
// - no delay to see if last question was answered correctly 

// mp3 source https://archive.org/details/tvtunes_6995  



