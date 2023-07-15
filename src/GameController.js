const { GAME } = require('./constants/Message');
const BridgeGame = require('./domains/BridgeGame');
const OutputView = require('./view/OutputView');

class GameController {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  // eslint-disable-next-line class-methods-use-this
  run() {
    OutputView.print(GAME.START);
  }
}

module.exports = GameController;
