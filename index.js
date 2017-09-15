const GuessingGame = require('./src/guessing-game.js');

window.game = new GuessingGame();

debugger;
const number = 532;
const game = new GuessingGame();
game.setRange(0, 4852)

let result = game.guess();
game.lower();
result = game.guess();
game.lower();
result = game.guess();
game.lower();
result = game.guess();
game.greater();
result = game.guess();
game.greater();
result = game.guess();