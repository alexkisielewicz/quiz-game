// Assign variable with audio and play it
const quizResultSound = new Audio("assets/audio/surprise.mp3");
quizResultSound.play();

// Read user score saved in local storage and asssign it to variable
const gameresult = sessionStorage.getItem("gameresult");

// Query DOM to get "play again" button and add event listener
const playAgain = document.getElementById("playAgain");
playAgain.addEventListener("click", replay);

// Query DOM and display text in html document depending on score value
result = document.getElementById("result");

if (gameresult === "10") {
  result.innerHTML = `All answers correct <br><br> is there something you don't know about James Bond?`;
  document.body.style.background = "#FFD700 ";
} else {
  result.innerHTML = `You scored<br> <span class="quiz-result">${gameresult}</span><br> points`
}; 

/**
 * This function takes user back to index.html where he can play quiz again
 */
function replay() {
  return window.location.href = "index.html";
};