console.log("Hello from gameresult.html")

var gameresult = sessionStorage.getItem("gameresult");
console.log("Your score is " + gameresult);

result = document.getElementById("result");
result.innerHTML = `You scored <span class="black">${gameresult}</span> points`;