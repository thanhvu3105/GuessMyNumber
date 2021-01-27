"use strict";

//message is a class from index.html
//console.log(document.querySelector(".message").textContent);

/*DOM: Document Object Mode, allows JS to access HTML elements
and css tyles, can change html attributes and css styles */

//WEB APIs : Libary written in js, DOM methods & properties

/*
//Change the content of HTML class('message')
document.querySelector('.message').textContent = '🍆 Correct Number';
console.log(document.querySelector('.message').textContent);

//Change the content of HTML class('number') & class('score')
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 18;

//Set a value for guess class
document.querySelector('.guess').value = 69;
console.log((document.querySelector('.guess').value = 69));
*/

const secretNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//document.querySelector(".number").textContent = number;
//console.log(number);

let number = secretNumber(1, 20);
let score = 20;
let highscore = 0;

//document.querySelector(".number").textContent = number;

function x() {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess, typeof guess);
  //console.log(number);
  //let count = 0;

  //WHEN THERE IS NO INPUT
  if (!guess) {
    displayMessage(`⛔️ No number`);
  } //WHEN INPUT IS OUT OF RANGE
  else if (guess < 1 || guess > 20) {
    displayMessage(`⛔️ OUT OF RANGE`);
  } //WHEN INPUT IS WRONG
  else if (guess != number && guess >= 1 && guess <= 20) {
    displayMessage(guess < number ? "🥶 Colder" : "☀️ Warmer");
    score--;
    document.querySelector(".score").textContent = score;
  } //WHEN INPUT IS CORRECT
  else if (guess == number) {
    //WINNING MESSAGE.
    // document.querySelector(".message").textContent = `🎰 Correct`;
    displayMessage(`🎰 Correct`);
    const officialScore = score;
    //STORE THE HIGH SCORE
    if (officialScore > highscore) highscore = officialScore;
    document.querySelector(".number").textContent = guess;
    document.querySelector(".highscore").textContent = highscore;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }

  //MESSAGE FOR LOSER
  if (score <= 0) {
    document.querySelector(".score").textContent = "0";
    //document.querySelector(".message").textContent = "LOSER";
    displayMessage("LOSER");
  }
}

//Set the value of class(check), addEventListner()
function reset() {
  score = 20;
  number = secretNumber(1, 20);
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
}

document.querySelector(".check").addEventListener("click", x);

document.querySelector(".again").addEventListener("click", reset);
