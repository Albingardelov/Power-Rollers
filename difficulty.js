const easyButton = document.getElementById('easy');
const mediumButton = document.getElementById('medium');
const hardButton = document.getElementById('hard');

easyButton.addEventListener('click', () => handleClick('easy'));
mediumButton.addEventListener('click', () => handleClick('medium'));
hardButton.addEventListener('click', () => handleClick('hard'));


export function handleClick(level) {
    const buttons = document.querySelectorAll('.btn');
    const message = document.getElementById('message');

    
    buttons.forEach(btn => {
        btn.style.backgroundColor = 'orange';
        btn.classList.remove('shake'); 
    });

    
    const wordLengthRange = {
        easy: [10, 13],
        medium: [13, 15],
        hard: [15, 17]
    };

    
    if (level === 'easy') {
        easyButton.style.backgroundColor = 'green';
        easyButton.classList.add('shake');
        message.textContent = 'You chose Easy!';
        message.style.color = 'green';
    } else if (level === 'medium') {
        mediumButton.style.backgroundColor = 'blue';
        mediumButton.classList.add('shake');
        message.textContent = 'You chose Medium!';
        message.style.color = 'blue';
    } else if (level === 'hard') {
        hardButton.style.backgroundColor = 'red';
        hardButton.classList.add('shake');
        message.textContent = 'You chose Hard!';
        message.style.color = 'red';
    }

    
    localStorage.setItem('level', level);
    localStorage.setItem('wordLength', JSON.stringify(wordLengthRange[level]));


    setTimeout(() => {
        window.location.href = 'gameplay.html';
    }, 1000); 
}
