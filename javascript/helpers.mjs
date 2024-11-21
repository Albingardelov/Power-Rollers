import { words } from '../assets/svenska-ord.mjs';

export function filterWords(words) {
    return words.filter(word => /^[a-ö]{10}$/i.test(word)).map(word => word.toLowerCase());
}

export function getRandomWord(filteredWords) {
    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    return filteredWords[randomIndex];
}

const filteredWords = filterWords(words);
const randomWord = getRandomWord(filteredWords);


