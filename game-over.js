// Hämta element
const guessedWordSpan = document.getElementById('guessedWord');
const highscoreButton = document.getElementById('highscoreButton');
const highscoreDialog = document.getElementById('highscoreDialog');
const highscoreList = document.getElementById('highscoreList');
const closeHighscoreDialog = document.getElementById('closeHighscoreDialog');
const tryAgainButton = document.getElementById('tryAgainButton');


const guessedWord = localStorage.getItem('guessedWord') || 'Unknown';
guessedWordSpan.textContent = guessedWord;


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


tryAgainButton.addEventListener('click', () => {
    window.location.href = 'gameplay.html'; 
});
