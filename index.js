var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll(".img1")[0].setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice" + randomNumber2 +".png";
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2){
    var winner = "🤟 Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    var winner = "Player 2 Wins! 🤟";
}
else if(randomNumber1 === randomNumber2){
    var winner = "Draw!🎲";
}
document.querySelector("h1").innerHTML = winner;