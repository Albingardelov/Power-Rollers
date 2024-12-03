
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
document.getElementById('startGame').addEventListener('click', function() {
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
});
/* js for sidan 2*/

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
	
}

playMusic();

/* adding event listener for buttons*/
easyButton.addEventListener('click', function() {
    handleClick('easy');
});

mediumButton.addEventListener('click', function() {
    handleClick('medium');
});

hardButton.addEventListener('click', function() {
    handleClick('hard');
});
/*function for playing music*/
function playMusic() {
	const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); 
	audio.play(); 
  
	/*stopping music after 10s*/
	setTimeout(function() {
	  audio.pause(); 
	  audio.currentTime = 0; 
	}, 10000);
  }
