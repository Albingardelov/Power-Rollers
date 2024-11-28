function handleClick(level) {
	const buttons = document.querySelectorAll('.btn');
	const message = document.getElementById('message');
  
	// Reset all buttons to orange
	buttons.forEach(btn => {
	  btn.style.backgroundColor = 'orange';
	  btn.classList.remove('shake'); // Remove shake class
	});
}