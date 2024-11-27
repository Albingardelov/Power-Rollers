import { words } from './assets/svenska-ord.js';

// Function to filter words (length exactly 10 characters)
export function filterWords(words) {
    return words.filter(word => /^[a-ö]{10}$/i.test(word)).map(word => word.toLowerCase());
}

// Function to get a random word from the filtered words list
export function getRandomWord(filteredWords) {
    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    return filteredWords[randomIndex];
}

// Initialize filtered words list and a random word from it
const filteredWords = filterWords(words);
let chosenWord = getRandomWord(filteredWords);

let displayedWord = '';
let guessedLetters = [];
let incorrectGuesses = 0;
let maxIncorrectGuesses = 6; // Hangman has 6 stages
const hangmanImages = [
    'images/0.png',
    'images/1.png',
    'images/2.png',
    'images/3.png',
    'images/4.png',
    'images/5.png',
    'images/6.png'
];

// References to DOM elements
const wordDisplay = document.querySelector('#word-display');
const guessedLettersDisplay = document.querySelector('#guessed-letters');
const hangmanImage = document.querySelector('#hangman-image');
const gameOverMessage = document.querySelector('#game-over-message');
const newGameButton = document.querySelector('#new-game-btn');
const keyboardContainer = document.querySelector('#keyboard-container');

// Function to create the on-screen keyboard
function createKeyboard() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzåäö';
    keyboardContainer.innerHTML = '';  // Clear any existing buttons

    for (let letter of alphabet) {
        const button = document.createElement('button');
        button.textContent = letter.toUpperCase();
        button.classList.add('keyboard-btn');
        button.addEventListener('click', () => handleGuess(letter));
        keyboardContainer.appendChild(button);
    }
}

// Function to choose a random word from the filtered list
function chooseWord() {
    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    chosenWord = filteredWords[randomIndex];
    displayedWord = '_'.repeat(chosenWord.length);
    guessedLetters = [];
    incorrectGuesses = 0;
    gameOverMessage.textContent = '';
    updateWordDisplay();
    updateHangmanImage();
    updateGuessedLetters();
}

// Function to update the word display with underscores or correct guesses
function updateWordDisplay() {
    wordDisplay.textContent = displayedWord.split('').join(' ');
}

// Function to update the hangman image based on incorrect guesses
function updateHangmanImage() {
    hangmanImage.src = hangmanImages[incorrectGuesses];
}

// Function to update the guessed letters display
function updateGuessedLetters() {
    guessedLettersDisplay.textContent = 'Incorrect Letters: ' + guessedLetters.join(', ');
}

// Function to handle a new guess
function handleGuess(letter) {
    // Prevent invalid or repeated input
    if (guessedLetters.includes(letter)) return; // Ignore if letter already guessed

    guessedLetters.push(letter);
    if (chosenWord.includes(letter)) {
        // Correct guess: Update displayed word
        let newDisplayedWord = '';
        for (let i = 0; i < chosenWord.length; i++) {
            newDisplayedWord += (chosenWord[i] === letter) ? letter : displayedWord[i];
        }
        displayedWord = newDisplayedWord;
    } else {
        // Incorrect guess: Increase incorrectGuesses
        incorrectGuesses++;
    }

    updateWordDisplay();
    updateHangmanImage();
    updateGuessedLetters();

    // Check if the game is over
    if (incorrectGuesses >= maxIncorrectGuesses) {
        gameOverMessage.textContent = `Game Over! The word was: ${chosenWord}`;
        disableKeyboard();
    } else if (!displayedWord.includes('_')) {
        gameOverMessage.textContent = 'You Win! Congratulations!';
        disableKeyboard();
    }
}


function disableKeyboard() {
    const allButtons = keyboardContainer.querySelectorAll('button');
    allButtons.forEach(button => button.disabled = true);
}

// Reset the game
function resetGame() {
    createKeyboard();
    chooseWord();
}

chooseWord();
createKeyboard();

newGameButton.addEventListener('click', resetGame);
