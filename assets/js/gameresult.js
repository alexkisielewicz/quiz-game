console.log("Hello from gameresult.html")

var gameresult = sessionStorage.getItem("gameresult");
console.log("Your score is " + gameresult);

const surprise = new Audio("assets/audio/surprise.mp3");
surprise.play();

result = document.getElementById("result");
result.innerHTML = `You scored<br> <span class="quiz-result">${gameresult}</span><br> points`;