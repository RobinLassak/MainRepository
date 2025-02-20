'use strict';
//Ulozeni celkove plochy obou hracu do konstant
const player1Element = document.querySelector('.player--0');
const player2Element = document.querySelector('.player--1');

//Ulozeni plochy pro jmena hracu do konstant
const p1Name = document.querySelector('#name--0');
const p2Name = document.querySelector('#name--1');

//Ulozeni vsech tlacitek do konstant
const buttonNewGame = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

//Ulozeni plochy pro vypsani aktualniho hodu do konstant
const roll1Element = document.getElementById('score--0');
const roll2Element = document.getElementById('score--1');

//Ulozeni plochy pro vypsani celkoveho score do konstant
const score1Element = document.getElementById('current--0');
const score2Element = document.getElementById('current--1');

//Ulozeni plochy pro obrazek kostky do konstanty
const diceElement = document.querySelector('.dice');

//Vytvoreni promennych pro aktualni score, celkove score a aktivniho hrace
let currentScore;
let totalScore;
let activePlayer;

//Inicializace prvni hry
function inicializace() {
  //Inicializace promennych na 0
  currentScore = 0;
  totalScore = [0, 0];
  activePlayer = 0;

  //Inicializace prostoru pro vypsani hodnot na 0
  score1Element.textContent = 0;
  score2Element.textContent = 0;
  roll1Element.textContent = 0;
  roll2Element.textContent = 0;

  //Zadani jmena hracu a jejich vypsani na hraci plochu
  p1Name.textContent = prompt('Zadej jmeno prvniho hrace: ');
  p2Name.textContent = prompt('Zadej jmeno druheho hrace: ');

  //Pridani tridy hidden kostce - to zajisti ze pred zacatkem hry nebude videt
  diceElement.classList.add('hidden');

  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--active');
  document.querySelector(`.player--0`).classList.add('player--active');
}

//Funkce pro prepnuti hracu
function switchPlayer() {
  //Pri zmene hrace se automaticky vynuluje pole pro aktualni hod
  document.querySelector(`#score--${activePlayer}`).textContent = 0;

  //Zajisti prepnuti hracu pri vyvolani funkce
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1Element.classList.toggle('player--active');
  player2Element.classList.toggle('player--active');
  currentScore = 0;
}

//Zavolani funkce pro inicializaci
inicializace();

//Funkce pro hod kostkou
buttonRoll.addEventListener('click', function () {
  //Generovani nahodnych cisel od 1 do 6
  let diceNum = Math.floor(Math.random() * 6) + 1;

  //Pridani tridy hidden kostce - objevi se po zahajeni hry
  diceElement.classList.remove('hidden');

  //Zobrazeni aktualniho hodu u kazdeho hrace
  document.querySelector(`#score--${activePlayer}`).innerHTML = diceNum;

  //Zajisti zmenu obrazku kostky podle aktualne vygenerovaneho cisla
  diceElement.src = `dice-${diceNum}.png`;
  if (diceNum !== 1) {
    currentScore += diceNum;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    switchPlayer();
  }
});

//Po stisknuti tlacitka new game se vse vrati do puvodniho stavu diky vzvolani funkce inicializace
buttonNewGame.addEventListener('click', function () {
  //Inicializace promennych na 0
  currentScore = 0;
  totalScore = [0, 0];
  activePlayer = 0;

  //Inicializace prostoru pro vypsani hodnot na 0
  score1Element.textContent = 0;
  score2Element.textContent = 0;
  roll1Element.textContent = 0;
  roll2Element.textContent = 0;

  //Pridani tridy hidden kostce - to zajisti ze pred zacatkem hry nebude videt
  diceElement.classList.add('hidden');
});
