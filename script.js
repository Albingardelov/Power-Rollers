
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
//  "Click Here To Start"
document.querySelector('.click p').addEventListener('click', function () {
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); 
    audio.play(); // Play the sound

    // Stop the audio after 10 seconds
    setTimeout(function () {
        audio.pause(); // Pause the audio
        audio.currentTime = 0; // Reset the audio to the beginning
    }, 10000); 
});