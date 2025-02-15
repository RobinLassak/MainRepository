"use strict";
//Tlacitka
const cenaButton = document.querySelector(".spocitat");
const porovnaniButton = document.querySelector(".kontrola");

const cenaPlace = document.querySelector(".cena");
const yourMoney = document.querySelector(".yourMoney");

let cenaKrmiva = 0;

function vypocetCeny() {
  let krmivo = document.getElementById("krmivo");
  let mnozstvi = document.getElementById("hmotnost");
  let pocKilo = parseInt(mnozstvi.value, 10);
  let cenaZaKilo = parseInt(krmivo.value, 10);

  const bio = document.getElementById("bio");
  const extra = document.getElementById("extra");
  const obyc = document.getElementById("obycejne");
  const darkove = document.getElementById("darkove");

  const kuryr = document.getElementById("kuryr");
  let posta = document.getElementById("posta");

  let vypocet;

  if (pocKilo > 0) {
    vypocet = cenaZaKilo * pocKilo;
  } else {
    vypocet = 0;
  }

  if (bio.checked) {
    vypocet = vypocet * 1.3;
  }
  if (extra.checked) {
    vypocet = vypocet * 1.5;
  }
  if (obyc.checked) {
    vypocet = Math.round(vypocet / 1.15);
  }
  if (darkove.checked) {
    vypocet = vypocet + 500;
  }

  if (kuryr.checked) {
    vypocet = Math.round(vypocet * 1.1);
  }

  if (posta.checked) {
    vypocet = vypocet + 250;
  }

  cenaKrmiva = vypocet;
  cenaPlace.innerHTML = `${cenaKrmiva} Kc`;
}

function kontrolaCeny() {
  let rozpocet = Number(yourMoney.value);
  const porovnaniPlace = document.querySelector(".porovnani");

  if (!cenaKrmiva || isNaN(cenaKrmiva)) {
    porovnaniPlace.innerHTML = "Nevybral jsi zradlo, nemam co porovnat";
  } else if (!rozpocet || isNaN(rozpocet)) {
    porovnaniPlace.innerHTML = "Nezadal jsi zadnou castku";
  } else if (rozpocet >= cenaKrmiva) {
    porovnaniPlace.innerHTML = "Tve finance jsou dostatecne";
  } else {
    porovnaniPlace.innerHTML = "Nemas dostatek financnich prostredku";
  }
}

function validuj() {
  const povolene = /^[\p{L}\p{N}]*$/u;
  const textArea = document.getElementById("mail");
  const errorMessage = document.getElementById("error-message");

  let vstup = textArea.value;

  if (povolene.test(vstup)) {
    errorMessage.style.display = "none";
    textArea.style.borderColor = "";
  } else {
    errorMessage.style.display = "block";
    textArea.style.borderColor = "red";
  }
}

cenaButton.addEventListener("click", vypocetCeny);
porovnaniButton.addEventListener("click", kontrolaCeny);
