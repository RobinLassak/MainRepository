'use strict';
const secretNumber = Math.floor(Math.random() * 20) + 1;

const againButton = document.querySelector('.again');
const checkButton = document.querySelector('.check');

const secretPlace = document.querySelector('.secretNumberPlace');
const userNumberPlace = document.querySelector('.playerNumber');

const guessText = document.querySelector('.changeText');

let score = 20;
let highscore = 0;

checkButton.addEventListener('click', function () {
  const userNumber = Number(userNumberPlace.value);

  if (!userNumber || isNaN(userNumber)) {
    guessText.innerHTML = 'Please enter number!';
  } else if (userNumber > 20 || userNumber < 1) {
    guessText.innerHTML = 'OUT OF RANGE!';
  } else if (userNumber === secretNumber) {
    guessText.innerHTML = 'WINNER!!';
    document.querySelector('.highscorePlace').innerHTML = score;
    document.querySelector('.gameTable').style.background =
      'linear-gradient(35deg,rgb(16, 214, 6),rgb(179, 252, 175))';
    secretPlace.innerHTML = secretNumber;
  } else if (userNumber > secretNumber) {
    if (score > 1) {
      guessText.innerHTML = 'Your Number is HIGHER';
      score--;
      document.querySelector('.scorePlace').innerHTML = score;
    } else {
      guessText.innerHTML = 'YOU LOST!';
      document.querySelector('.scorePlace').innerHTML = 0;
      document.querySelector('.highscorePlace').innerHTML = 0;
      document.querySelector('.gameTable').style.background =
        'linear-gradient(35deg, #d60606,rgb(236, 156, 156))';
      secretPlace.innerHTML = secretNumber;
    }
  } else if (userNumber < secretNumber) {
    if (score > 1) {
      guessText.innerHTML = 'Your Number is LOWER';
      score--;
      document.querySelector('.scorePlace').innerHTML = score;
    } else {
      guessText.innerHTML = 'YOU LOST!';
      document.querySelector('.scorePlace').innerHTML = 0;
      document.querySelector('.highscorePlace').innerHTML = 0;
      document.querySelector('.gameTable').style.background =
        'linear-gradient(35deg, #d60606,rgb(236, 156, 156))';
      secretPlace.innerHTML = secretNumber;
    }
  }
});

againButton.addEventListener('click', function () {
  document.querySelector('.highscorePlace').innerHTML = '0';
  document.querySelector('.scorePlace').innerHTML = '20';
  score = 20;
  highscore = 0;
  document.querySelector('.gameTable').style.background =
    'linear-gradient(250deg, #bb52de, #9fcddc)';
  guessText.innerHTML = 'Start guessing...';
  secretPlace.innerHTML = '?';
  userNumberPlace.value = '';
});
