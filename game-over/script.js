const word = localStorage.getItem('word')
const guesses = localStorage.getItem('guesses')

// display
document.getElementById('word').innerText = word;
document.getElementById('guesses').innerText = guesses;
