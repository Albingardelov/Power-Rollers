/* import { words } from "./assets/svenska-ord.js";
 */const gameModal = document.querySelector("#gameModal");
let currentword = "example";

const gamOver = (isVictory) => {
    const modalText = isVictory ? `You found the word:` : `The correct word was:`;
    gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
    gameModal.querySelector('h4').innerText = isVictory ? 'Congrats' : 'Game Over!';
    gameModal.querySelector('p').innerHTML = `${modalText} <b>${currentword}</b>`;

    gameModal.classList.add("show");
    gameModal.addEventListener('click', closeModal); 
}

const closeModal = () => {
    gameModal.classList.remove("show");
}

setTimeout(() => {
    gamOver(false);  // Trigger the modal for a loss
}, 2000); // Call after 2 seconds (simulating the game end)
