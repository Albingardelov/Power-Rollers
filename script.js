
document.getElementById('submitButton').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput').value;
    const message = document.getElementById('message');

	//for swedish and english names//
	
    if (/^[a-zA-ZåäöÅÄÖ\s]+$/.test(nameInput)) { 
        message.textContent = `Hello ${nameInput}! Let's start!`;
        message.style.color = 'green';
		message.style.fontSize = '25px';
		message.style.textAlign = 'center';
    } else {
        message.textContent = 'Your name can only contain letters, Please try again.';
        message.style.color = 'red';
		message.style.fontSize = '25px';
		message.style.textAlign = 'center';
    }
});


let here=document.querySelector(".here")
let page1=document.querySelector(".page1")
let page2=document.querySelector(".page2")
here.addEventListener("click",()=>{
	page1.style.display='none'
	page2.style.display='block'


})
