
const easyButton = document.querySelector('.easy');
const mediumButton = document.querySelector('.medium');
const hardButton = document.querySelector('.hard');
const buttons = document.querySelectorAll('.btn');
const message = document.getElementById('message');

/*for changing color and message to user*/
function handleClick(level) {
    buttons.forEach(button => {
        button.style.backgroundColor = 'rgb(234, 124, 69)';
        button.classList.remove('shake'); 
    });


	// Change color of clicked button and display message with color
	if (level === 'easy') {
		const easyButton = document.querySelector('.easy');
		easyButton.style.backgroundColor = 'green';
		easyButton.classList.add('shake'); // Add shake effect
		message.textContent = 'You chose Easy!';
		message.style.color = 'green';
	  } else if (level === 'medium') {
		const mediumButton = document.querySelector('.medium');
		mediumButton.style.backgroundColor = 'blue';
		mediumButton.classList.add('shake'); // Add shake effect
		message.textContent = 'You chose Medium!';
		message.style.color = 'blue';
	  } else if (level === 'hard') {
		const hardButton = document.querySelector('.hard');
		hardButton.style.backgroundColor = 'red';
		hardButton.classList.add('shake'); // Add shake effect
		message.textContent = 'You chose Hard!';
		message.style.color = 'red';
	  }
}
 
document.addEventListener('DOMContentLoaded', function () {
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audio.play(); // Play the sound

    // Stop the audio after 10 seconds
    setTimeout(function () {
        audio.pause(); // Pause the audio
        audio.currentTime = 0; // Reset the audio to the beginning
    }, 10000);
});

