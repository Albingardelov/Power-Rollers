<<<<<<< HEAD
const gameModel = document.querySelector("#gameModel");
let currentword = "example"; // Replace with the word your game is using

const gameOver = (isVictory) => {
  const modelText = isVictory ? "You found the word:" : "The correct word was:";
  gameModel.querySelector("img").src = `images/${
    isVictory ? "victory" : "lost"
  }.gif`;
  gameModel.querySelector("h4").innerText = isVictory
    ? "Congrats"
    : "Game Over!";
  gameModel.querySelector("p").innerHTML = `${modelText} <b>${currentword}</b>`;

  gameModel.classList.add("show");
  gameModel.addEventListener("click", closeModel);
};

const closeModel = () => {
  gameModel.classList.remove("show");
};

setTimeout(() => {
  gameOver(false);
}, 2000);
=======
import { words } from '.../assets/svenska-ord.js';

export function filterWords(words){
    return words.filterWords(word => /^[a-ö]{10}$/i.test(word)).map(word => word.toLowerCase());
}

export function getRadndomWord(filterWords) {
    const randomindex =Math.floor(Math.random() * filterWords.length);
    return filterWords[randomindex];
}

const filterWords = filterWords(words);
let selectWord = getRadndomWord(filterWords);

const wordConatiner = document.querySelector('#word');
const wrongLetterContainer =document.querySelector('.worng-letter');
const notification = document.querySelector('#notification-container');
const popupContainer =document.querySelector('#popup-container');
const message = document.querySelector('#message');
const playButton = document.querySelector('#paly-button');

let guessedLetters=[];
let wrongLetters =[];
let guessedAttempts = 6;


function startGame(){
    guessedLetters =[];
    wrongLetters =[];
    selectWord =getRadndomWord(filterWords);

    uppdateWordsDisplay();
    wrongLetterContainer.innerHTML ='';
    notification.style.dispaly = 'none';
    notification.style.dispaly = 'none';
    guessedAttempts = 6;
    drawnHangman();

    
}
>>>>>>> origin/Seble
