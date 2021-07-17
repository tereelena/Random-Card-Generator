/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //console.log("Hello Rigo from the console!");
  let pinta = ["♦", "♥", "♣", "♠"];
  let card = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "k"];

  let num_card = card[Math.floor(Math.random() * card.length)];
  let num_pinta = pinta[Math.floor(Math.random() * pinta.length)];
  let arriba = document.querySelector(".arriba");
  arriba.innerHTML = num_pinta;
  let medio = document.querySelector(".medio");
  medio.innerHTML = num_card;
  let abajo = document.querySelector(".abajo");
  abajo.innerHTML = num_pinta;
};
//realizando el extra///

let btn = document.getElementById("mybtn");

btn.onclick = function() {
  setTimeout(function() {
    let ancho = document.getElementById("alto").value;
    let alto = document.getElementById("ancho").value;

    let elem = document.querySelector(".card");

    elem.style.height = alto;
    elem.style.width = ancho;

    let pinta = ["♦", "♥", "♣", "♠"];
    let card = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "k"
    ];

    let num_card = card[Math.floor(Math.random() * card.length)];
    let num_pinta = pinta[Math.floor(Math.random() * pinta.length)];

    let arriba = document.querySelector(".arriba");
    arriba.innerHTML = num_pinta;

    let medio = document.querySelector(".medio");
    medio.innerHTML = num_card;
    let abajo = document.querySelector(".abajo");
    abajo.innerHTML = num_pinta;
  }, 10000);
};
