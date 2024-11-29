
document.getElementById('submitButton').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput').value;
    const message = document.getElementById('message');
    
    if (/^[a-zA-Z\u0600-\u06FF\s]+$/.test(nameInput)) { 
        message.textContent = `Hello ${nameInput}! Let's start!`;
        message.style.color = 'green';
    } else {
        message.textContent = 'Your name can only contain letters, Please try again.';
        message.style.color = 'red';
    }
});
