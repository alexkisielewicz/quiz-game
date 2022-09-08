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
// Allow user to click on the choices depending on this Boolean variable value 
let letUserClick = true;

// Score
let userScore = document.getElementById("score");
userScore = 0;

// Progress bar
const progress = document.getElementById("progress");
let progressBarWidth = 0;

// Assignement of James Bond Theme audio file to the variable
const music = new Audio("assets/audio/bondtheme.mp3");
music.volume = 0.4;

// Toggle button to pause/play Bond Theme
const pauseButton = document.getElementById("audioControl");
pauseButton.addEventListener("click", function() {
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

/**
 * This function is called to hide "Rules" and "Start" buttons when user starts the quiz. 
 */
function showRules() {
    rulesContainer.classList.remove("hide");
    rulesButton.classList.add("hide");
}

/**
 * This function iniciate the game by hiding the buttons from the main screen and showing game interface, qustion and answers. It also plays audio and creates new array with all questions. 
 */
function startGame() {
    // Hide quiz interface elements in HTML document
    rulesContainer.classList.add("hide");
    controlsContainer.classList.add("hide");
    gameContainer.classList.remove("hide");
    // Set question counter to 0, that prevents showing incorrect value for user re-playing quiz
    questionCounter = 0;
    // Play Audio with Bond Theme
    music.play();
    // Create new array with all questions to be able to remove used questions
    availableQuestions = [...allQuestions];
    showQuestion();
}

/** 
 * This function returns random audio file depends on called parameter - from "correct" sounds or from "incorrect" sounds array. Files are assigned in sounds.js file. 
 */
function getAudio(audioFiles) {
    // Used well known method to get random array index - https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
    return audioFiles[Math.floor(Math.random() * audioFiles.length)];
}

/**
 * The function is called when user gives correct answer. It increments the score and gives user feedback by playing the sound and changing body background and button colour in the DOM. After short delay it brings back the default style of a document.   
 */
function correctAnswer() {
    // Assign variable with correct answer sound randomly generated using getAudio() function
    correctSound = new Audio(getAudio(audioFilesCorrect));

    // Play audio to give user feedback for correct answer
    correctSound.play();

    // Increment user score
    userScore++;

    // Declare variable to store the score in the local storage
    gameResult = userScore;
    sessionStorage.setItem("gameresult", gameResult);

    // Highlite answer green to give user feedback for correct answer
    correctAnswerButton = (choices[rightAnswer - 1]);
    correctAnswerButton.classList.add("correct");

    //feedback for correct answer
    score.innerHTML = `${userScore} <i class="fa-solid fa-star"></i>`;

    // Show image and change background to green - correct answer!
    setTimeout(() => {
        document.body.style.background = "#007B00 url('assets/images/bond.webp') no-repeat center";
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
    // Assign variable with incorrect answer sound randomly generated using getAudio() function
    incorrectSound = new Audio(getAudio(audioFilesIncorrect));

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
    if (availableQuestions.length <= 10) {
        return window.location.href = "score.html";
    }

    // Increment question counter
    questionCounter++;

    // Update question counter display
    counter.innerHTML = `<i class="fa-solid fa-circle-question"></i> ${questionCounter}/10`;

    // Update progress bar display by 10% for each questione
    progressBarWidth += 10;
    progress.style.width = progressBarWidth + "%";



    // Get random question from the array with all questions (in questions.js)
    // Used well known method to get random array index - https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
    questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    // Display question in HTML document
    question.innerText = currentQuestion.question;

    // Assign variable to store correct answer read from the object  
    rightAnswer = currentQuestion.answer;

    // Insert answer options from the array into the buttons in HTML document 
    choices.forEach((choice) => {
        optionIndex = choice.dataset.answer;
        choice.innerText = currentQuestion["option" + optionIndex];
    });

    // Remove used question from the array
    availableQuestions.splice(questionIndex, 1);
    // Enable buttons so user can pick the choices
    enableDisableButtons(null, false);
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
}

/** 
 * The function queries the DOM for answer buttons and disable/enable them after user gives answer. That prevents user from clicking on other buttons before answer is checked and feedback is displayed. 
 * Further description available in Readme, bugs section.  
 * Mentor - Reuben Ferrante edited this function and helped to fix the issue with multiple-selection of a buttons.  
 */
function enableDisableButtons(event, disable = true) {
    allButtons = document.getElementsByClassName("button choice");
    for (i = 0; i < allButtons.length; i++) {
        // increasing i by 1 because of the index
        if (disable) {
            if ((i + 1).toString() !== event.target.dataset.answer) {
                // disable the rest of the buttons
                allButtons[i].setAttribute("disable", "");
            }
        } else {
            allButtons[i].removeAttribute("disable");
        }
    }
}

/** 
 * For each method is used to add event listeners for user clicks on the choices. If buttons are enabled it disables them after user click. This prevents user from clicking on other choices and displaying feedback multiple times. There are 20 questions in the array and user answers 10 random questions. When user answers the last tenth question the quiz ends and score button is displayed.    
 * Mentor - Reuben Ferrante edited the code with first "if" conditional to hepl me solve issue with choices buttons that were still clickable after user gives answer. 
 */
choices.forEach((choice) => {
    choice.addEventListener("click", (event) => {
        // In case the user clicks again, check for disable attribute
        if (letUserClick && event.target.getAttribute("disable") !== '') {
            enableDisableButtons(event);
            computeAnswer(event);
        }
        letUserClick = false;
    });
});