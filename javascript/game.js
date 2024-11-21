const gameModel = document.querySelector("#gameModel");
let currentword = "example"; // Replace with the word your game is using

const gameOver = (isVictory) => {
  const modelText = isVictory ? "You found the word:" : "The correct word was:";
  gameModel.querySelector("img").src = `images/${
    isVictory ? "victory" : "lost"
  }.gif`;
  gameModel.querySelector("h4").innerText = isVictory
    ? "Congrats"
    : "Game Over!";
  gameModel.querySelector("p").innerHTML = `${modelText} <b>${currentword}</b>`;

  gameModel.classList.add("show");
  gameModel.addEventListener("click", closeModel);
};

const closeModel = () => {
  gameModel.classList.remove("show");
};

setTimeout(() => {
  gameOver(false);
}, 2000);
