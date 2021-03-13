/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
document.querySelector('#btn__reset').addEventListener('click', function () {
  game.startGame();
});

/**
 * Event listener for ONSCREEN keys
 */
document.querySelectorAll('.key').forEach((key) => {
  key.addEventListener('click', function (event) {
    const button = event.target;
    game.handleInteraction(button);
  });
});

/**
 * Event listener for KEYBOARD keys
 * make response match onscreen keys
 */
document.addEventListener('keydown', function (event) {
  const keyPressed = event.key;
  const onscreenButtons = document.querySelectorAll('.key');
  onscreenButtons.forEach((button) => {
    if (button.textContent === keyPressed) game.handleInteraction(button);
  });
});
