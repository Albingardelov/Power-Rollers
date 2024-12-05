import { words } from './svenska-ord.js';

let selectedWord = '';
let guessedLetters = [];
let wrongLetters = [];
let remainingGuesses = 6;
let wins = 0;
let losses = 0;
let hangMan = 0;
let score = 0;

const startButton = document.querySelector('#start-btn');
const wordDisplay = document.querySelector('#word');
const wrongLettersDisplay = document.querySelector('#wrong-letters');
const letterError = document.querySelector('#letter-error');
const finalMsgContainer = document.querySelector('.final-message-container');
const finalMessage = document.querySelector('#final-message');
const scoreWin = document.querySelector('.win');
const scoreLose = document.querySelector('.lose');
const keyboardContainer = document.querySelector('#keyboard');
const highscoreButton = document.querySelector('#highscoreButton'); 
const highscoreDialog = document.querySelector('#highscoreDialog'); 
const highscoreList = document.querySelector('#highscoreList'); 
const closeHighscoreDialog = document.querySelector('#closeHighscoreDialog'); 

const ground = document.querySelector("#ground");
const scaffold = document.querySelector("#scaffold");
const head = document.querySelector("#head");
const body = document.querySelector("#body");
const arms = document.querySelector("#arms");
const legs = document.querySelector("#legs");

const selectedLevel = localStorage.getItem('level') || 'medium';
const wordLengthRange = JSON.parse(localStorage.getItem('wordLength')) || [13, 15];

function restartHangMan() {
    ground.style.display = "none";
    scaffold.style.display = "none";
    head.style.display = "none";
    body.style.display = "none";
    arms.style.display = "none";
    legs.style.display = "none";
    hangMan = 0;
}

function drawHangMan() {
    if (hangMan === 0) {
        ground.style.display = "";
    } else if (hangMan === 1) {
        scaffold.style.display = "";
    } else if (hangMan === 2) {
        legs.style.display = "";
    } else if (hangMan === 3) {
        arms.style.display = "";
    } else if (hangMan === 4) {
        body.style.display = "";
    } else if (hangMan === 5) {
        head.style.display = "";
        handleGameOver(); 
    }
    hangMan++;
}


startButton.addEventListener('click', startGame);

function createKeyboard() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzöäå';
    keyboardContainer.innerHTML = '';
    for (let i = 0; i < alphabet.length; i++) {
        const button = document.createElement('button');
        button.classList.add('key');
        button.innerText = alphabet[i];
        button.addEventListener('click', () => {
            handleGuess(button.innerText.toLowerCase());
            button.disabled = true; 
        });
        keyboardContainer.appendChild(button);
    }
}


highscoreButton.addEventListener('click', () => {
    const highscores = JSON.parse(localStorage.getItem('highscores')) || [];
    highscoreList.innerHTML = ''; 

    highscores.forEach((score) => {
        const formattedDate = new Date(score.date).toLocaleDateString('en-US');
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${score.name} - Score: ${score.score} - Date: ${formattedDate}`;
        highscoreList.appendChild(listItem);
    });

    highscoreDialog.showModal();
});


closeHighscoreDialog.addEventListener('click', () => {
    highscoreDialog.close();
});

function startGame() {
    guessedLetters = [];
    wrongLetters = [];
    remainingGuesses = 6;
    hangMan = 0;
    score = 0;

    finalMsgContainer.style.display = 'none';

    const filteredWords = words.filter(
        (word) => word.length >= wordLengthRange[0] && word.length <= wordLengthRange[1]
    );

    if (filteredWords.length === 0) {
        alert('No words available for this difficulty. Defaulting to medium.');
        selectedWord = words[Math.floor(Math.random() * words.length)];
    } else {
        selectedWord = filteredWords[Math.floor(Math.random() * filteredWords.length)];
    }

    updateWordDisplay();
    updateWrongLettersDisplay();
    createKeyboard();
    restartHangMan();
}

function updateWordDisplay() {
    const displayWord = selectedWord.split('')
        .map(letter => guessedLetters.includes(letter) ? letter : '_')
        .join(' ');
    wordDisplay.innerHTML = displayWord;
}

function updateWrongLettersDisplay() {
    wrongLettersDisplay.innerHTML = `Wrong letters: ${wrongLetters.join(', ')}`;
}

function handleGuess(guess) {
    if (guessedLetters.includes(guess) || wrongLetters.includes(guess)) {
        letterError.style.display = 'block';
        setTimeout(() => letterError.style.display = 'none', 1000);
        return;
    }

    guessedLetters.push(guess);

    if (selectedWord.includes(guess)) {
        score++;
        updateWordDisplay();
    } else {
        wrongLetters.push(guess);
        remainingGuesses--;
        updateWrongLettersDisplay();
        drawHangMan();
    }

    checkGameStatus();
}

function checkGameStatus() {
    if (!wordDisplay.innerHTML.includes('_')) {
        wins++;
        scoreWin.innerText = wins;
        handleWin();
    } else if (remainingGuesses <= 0) {
        losses++;
        scoreLose.innerText = losses;
        handleGameOver();
    }
}

function handleWin() {
    saveHighscore();
}

function handleGameOver() {
    saveHighscore();
    localStorage.setItem('guessedWord', selectedWord);
    window.location.href = 'game-over.html';
}

function saveHighscore() {
    const playerName = localStorage.getItem("playerName") || "Player";
    const currentDate = new Date().toISOString();

    const highscores = JSON.parse(localStorage.getItem('highscores')) || [];
    highscores.push({
        name: playerName,
        score: score,
        date: currentDate
    });

    highscores.sort((a, b) => b.score - a.score);
    localStorage.setItem('highscores', JSON.stringify(highscores));
}

