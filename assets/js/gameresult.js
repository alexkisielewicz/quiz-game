console.log("Hello from gameresult.html")

// Assign variable with audio and play it
const surprise = new Audio("assets/audio/surprise.mp3");
surprise.play();

// Read user score saved in local storage and asssign it to variable
const gameresult = sessionStorage.getItem("gameresult");
console.log("Your score is " + gameresult);

// Query DOM 
const playAgain = document.getElementById("playAgain");
playAgain.innerText = "Play Again";

// Query DOM and display game result in HTML document
result = document.getElementById("result");

if (gameresult === "10") {
  result.innerHTML = `All answers correct <br><br> is there something you don't know about James Bond?`;
  document.body.style.background = "#FFD700 ";
} else {
  result.innerHTML = `You scored<br> <span class="quiz-result">${gameresult}</span><br> points`
}; 

