
document.getElementById('submitButton').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput').value;
    const message = document.getElementById('message');
    
    if (/^[a-zA-Z\u0600-\u06FF\s]+$/.test(nameInput)) { 
        message.textContent = `Hello ${nameInput}! Let's play!`;
        message.style.color = 'green';
    } else {
        message.textContent = 'This is not a correct name.Please try again.';
        message.style.color = 'red';
    }
});
