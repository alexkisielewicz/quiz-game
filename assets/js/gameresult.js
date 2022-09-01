console.log("Hello from gameresult.html")

var gameresult = sessionStorage.getItem("gameresult");
console.log("Your score is " + gameresult);

result = document.getElementById("result");
result.innerText = `You scored ${gameresult} points`;