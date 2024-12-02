import { words } from '../svenska-ord.js';

let selectedWord = '';
let guessedLetters = [];
let wrongLetters = [];
let remainingGuesses = 6;
let wins = 0;
let losses = 0;
let hangMan = 0;

const startButton = document.querySelector('#start-btn');
const wordDisplay = document.querySelector('#word');
const wrongLettersDisplay = document.querySelector('#wrong-letters');
const letterError = document.querySelector('#letter-error');
const finalMsgContainer = document.querySelector('.final-message-container');
const finalMessage = document.querySelector('#final-message');
const playButton = document.querySelector('#play-button');
const scoreWin = document.querySelector('.win');
const scoreLose = document.querySelector('.lose');
const keyboardContainer = document.querySelector('#keyboard');

const ground = document.querySelector("#ground");
const scaffold = document.querySelector("#scaffold");
const head = document.querySelector("#head");
const body = document.querySelector("#body");
const arms = document.querySelector("#arms");
const legs = document.querySelector("#legs");

const selectedLevel = localStorage.getItem('level') || 'medium'; // Standardnivå
const wordLengthRange = JSON.parse(localStorage.getItem('wordLength')) || [13, 15]; // Standardintervall

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
        showFinalMessage(`You Lose! The word was: ${selectedWord}`);
    }
    hangMan++;
}

startButton.addEventListener('click', startGame);

keyboardContainer.addEventListener('click', function (e) {
    if (remainingGuesses <= 0) return;

    if (e.target && e.target.classList.contains('key')) {
        const letter = e.target.innerText.toLowerCase();
        e.target.disabled = true;
        handleGuess(letter);
    }
});

function startGame() {
    guessedLetters = [];
    wrongLetters = [];
    remainingGuesses = 6; // Alltid 6 gissningar
    hangMan = 0;

    finalMsgContainer.style.display = 'none'; // Döljer slutmeddelandet
    document.querySelectorAll('.key').forEach(button => (button.disabled = false)); // Aktivera alla knappar

    const filteredWords = words.filter(
        (word) => word.length >= wordLengthRange[0] && word.length <= wordLengthRange[1]
    );
    if (filteredWords.length === 0) {
        alert('No words available for this difficulty. Defaulting to medium.');
        selectedWord = words[Math.floor(Math.random() * words.length)];
    } else {
        selectedWord = filteredWords[Math.floor(Math.random() * filteredWords.length)];
    }

    updateWordDisplay(); // Uppdatera ordet i spelet
    updateWrongLettersDisplay(); // Uppdatera felaktiga bokstäver
    createKeyboard(); // Skapa tangentbord
    restartHangMan(); // Återställ galgen
}

function createKeyboard() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzöäå';
    keyboardContainer.innerHTML = '';
    for (let i = 0; i < alphabet.length; i++) {
        const button = document.createElement('button');
        button.classList.add('key');
        button.innerText = alphabet[i];
        keyboardContainer.appendChild(button);
    }
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
        showFinalMessage("You Win!");
    } else if (remainingGuesses <= 0) {
        losses++;
        scoreLose.innerText = losses;
        showFinalMessage(`You Lose! The word was: ${selectedWord}`);
    }
}

function showFinalMessage(message) {
    finalMsgContainer.style.display = 'block';
    finalMessage.innerHTML = message;

    playButton.onclick = () => {
        finalMsgContainer.style.display = 'none'; // Dölj slutmeddelandet
        startGame(); // Starta om spelet
    };
}

startGame();
