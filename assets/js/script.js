// wait for DOM to load first
document.addEventListener("DOMContentLoaded", function() {
  let startButton = document.getElementById("startButton");
  startButton.addEventListener("click", startGame);
}); 

// get HTML elements to hide/show
const controlsContainer = document.getElementById("controls");
const gameContainer = document.getElementById("game");
let question = document.getElementById("question");

// get buttons
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");

let nextButton = document.getElementById("next");
nextButton.addEventListener("click", nextQuestion);

let questionsCounter = 0;
let score = 0;
let questionsLeft = [];



// 20 quiz questions array
const allQuestions = [
  {
    question: "What is James Bond's Secret Service Agent code name?", 
    option1: "006", 
    option2: "007", 
    option3: "010",
    option4: "777",
    answer: 2,
  },

  {
    question: "What brand of car is Bond most often associated with?", 
    option1: "Jaguar", 
    option2: "Bentley", 
    option3: "Aston Martin",
    option4: "Rolls-Royce",
    answer: 3,
  },

  {
    question: "What was the first Bond film released in cinema?", 
    option1: "Dr No", 
    option2: "Goldfinger", 
    option3: "Moonraker",
    option4: "Thunderball",
    answer: 1,
  },
  
  {
    question: "Who was the first actor to portray James Bond on film?", 
    option1: "George Lazenby", 
    option2: "Sean Connery", 
    option3: "Timoty Dalton",
    option4: "Roger Moore",
    answer: 1,
  },

  {
    question: "From whose novels are the James Bond movies originally adapted?", 
    option1: "Ian Fleming", 
    option2: "Henry Porter", 
    option3: "John Altman",
    option4: "John le Carre",
    answer: 1,
  },

  {
    question: "How does Bond prefer his martini?", 
    option1: "Dirty", 
    option2: "On the rocks", 
    option3: "Shaken, not stirred",
    option4: "With a twist",
    answer: 1,
  },

  {
    question: "Which of Bond’s many enemies notably owned a white cat?", 
    option1: "Ernst Stavro Blofeld", 
    option2: "Auric Goldfinger", 
    option3: "Le Chiffre",
    option4: "Jaws",
    answer: 1,
  },

  {
    question: "Who sings the latest Bond theme in No Time to Die?", 
    option1: "Lorde", 
    option2: "Adele", 
    option3: "Billie Eilish",
    option4: "Alicia Keys",
    answer: 1,
  },

  {
    question: "How many films has Daniel Craig played Bond in to date?", 
    option1: "4", 
    option2: "5", 
    option3: "6",
    option4: "7",
    answer: 1,
  },

  {
    question: "Which of the following actresses has NOT appeared as a ‘Bond Girl’?", 
    option1: "Halle Berry", 
    option2: "Charlize Theron", 
    option3: "Rosamund Pike",
    option4: "Michelle Yeoh",
    answer: 1,
  },

  {
    question: "In which country was Bond actor Pierce Brosnan born?", 
    option1: "Northern Ireland", 
    option2: "Ireland", 
    option3: "Scotland",
    option4: "USA",
    answer: 1,
  },

  {
    question: "What was Daniel Craig’s first Bond film?", 
    option1: "Skyfall", 
    option2: "Quantum of Solace", 
    option3: "Casino Royale",
    option4: "Spectre",
    answer: 1,
  },

  {
    question: "Whom does James Bond work for?", 
    option1: "MI 5", 
    option2: "MI 6", 
    option3: "SAS",
    option4: "Ministry of Defence",
    answer: 1,
  },

  {
    question: "What was the only Bond theme song to reach No. 1 on the U.S. Billboard chaarts?", 
    option1: "Carly Simon's 'Nobody Does it Better'", 
    option2: "Duran Duran's 'A View to a Kill'", 
    option3: "Paul Mc Cartney's 'Live and Let Die'",
    option4: "Adele's 'Skyfall'",
    answer: 1,
  },

  {
    question: "What was the first Bond film released in cinema?", 
    option1: "Dr No", 
    option2: "Goldfinger", 
    option3: "Moonraker",
    option4: "Thunderball",
    answer: 1,
  },

  {
    question: "What was the first Bond film released in cinema?", 
    option1: "Dr No", 
    option2: "Goldfinger", 
    option3: "Moonraker",
    option4: "Thunderball",
    answer: 1,
  },

  {
    question: "What was the first Bond film released in cinema?", 
    option1: "Dr No", 
    option2: "Goldfinger", 
    option3: "Moonraker",
    option4: "Thunderball",
    answer: 1,
  },

  {
    question: "What was the first Bond film released in cinema?", 
    option1: "Dr No", 
    option2: "Goldfinger", 
    option3: "Moonraker",
    option4: "Thunderball",
    answer: 1,
  },

  {
    question: "What was the first Bond film released in cinema?", 
    option1: "Dr No", 
    option2: "Goldfinger", 
    option3: "Moonraker",
    option4: "Thunderball",
    answer: 1,
  },

  {
    question: "What was the first Bond film released in cinema?", 
    option1: "Dr No", 
    option2: "Goldfinger", 
    option3: "Moonraker",
    option4: "Thunderball",
    answer: 1,
  }
] 

function getRandomQuestion(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const randomQuestion = arr[randomIndex];

    return randomQuestion;
}

let randomQuestion = getRandomQuestion(allQuestions);


function startGame() {
  controlsContainer.classList.add("hide");
  gameContainer.classList.remove("hide");
  questionsCounter = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  question.innerText = randomQuestion.question;
  answer1.innerText = randomQuestion.option1;
  answer2.innerText = randomQuestion.option2;
  answer3.innerText = randomQuestion.option3;
  answer4.innerText = randomQuestion.option4;
  removeQuestion();
} 

function removeQuestion() {
console.log("Current question has been removed from array"); 
questionsLeft = 0;
}

function nextQuestion() {
  console.log("next question");
  questionCounter++; 
  
  
}

function selectAnswer() {

}

function showNextQuestion() {

}


function checkUserAnswer() {
  // check user answer
  // compare user answer with array randomQuestion.answer
}
