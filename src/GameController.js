const { GAME, USER } = require('./constants/Message');
const BridgeGame = require('./domains/BridgeGame');
const Validator = require('./validator');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

class GameController {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  // eslint-disable-next-line class-methods-use-this
  *run() {
    OutputView.print(GAME.START);
    while (true) {
      const bridgeSize = yield GameController.#inputBridgeSize;
      if (Validator.isValidateBridgeSize(Number(bridgeSize))) break;
    }
  }

  /**
   * 유저가 다리 사이즈를 입력하기 위한 메서드
   * @param {*} callback - 유저가 입력한 값을 yield 키워드에서 사용하기 위한 callback
   * @returns {void}
   */
  static #inputBridgeSize(callback) {
    InputView.readBridgeSize(USER.INPUT_BRIDGE_SIZE, (inputValue) => {
      callback(inputValue);
    });
  }
}

module.exports = GameController;
