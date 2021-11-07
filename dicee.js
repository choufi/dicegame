todosLosDice = ["dice1.png", "dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];

function numeroRandom () {
return todosLosDice [Math.floor (Math.random()*(7-1))];
}

document.querySelector(".img1").setAttribute("src", numeroRandom() );
document.querySelector(".img2").setAttribute("src", numeroRandom() );

var atributoPlayer1 = document.querySelector(".img1").getAttribute("src");
var atributoPlayer2 = document.querySelector(".img2").getAttribute("src");

if (atributoPlayer1>atributoPlayer2) {
  document.querySelector("h1").innerHTML="🏁 Player 1 wins";

}
else if (atributoPlayer1<atributoPlayer2) {
  document.querySelector("h1").innerHTML="Player 2 wins 🏁";

}
else {
  document.querySelector("h1").innerHTML="🏁 Draw 🏁";
}
