document.getElementById('submitButton').addEventListener('click', function () {
    const nameInput = document.getElementById('nameInput').value.trim();
    const message = document.getElementById('message');

    if (/^[a-zA-Z\u0600-\u06FF\s]+$/.test(nameInput)) { 
        localStorage.setItem('playerName', nameInput);

        
        console.log('Saved player name:', localStorage.getItem('playerName'));

        
        message.textContent = `Hello ${nameInput}! Let's start!`;
        message.style.color = 'green';

        
        const startLink = document.querySelector('.click a');
        startLink.style.pointerEvents = 'auto';
        startLink.style.opacity = '1';
    } else {
        message.textContent = 'Your name can only contain letters, Please try again.';
        message.style.color = 'red';

        const startLink = document.querySelector('.click a');
        startLink.style.pointerEvents = 'none';
        startLink.style.opacity = '0.5';
    }
});
