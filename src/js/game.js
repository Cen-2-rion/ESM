class Game {
  start() {
    console.log('game started');
  }
}

class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

const { Character } = require('./domain.js');

exports.Game = Game;
exports.writeGameSaving = writeGameSaving;
exports.readGameSaving = readGameSaving;
exports.writeGameSaving = writeGameSaving;