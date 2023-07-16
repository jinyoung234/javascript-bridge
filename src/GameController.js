const BridgeMaker = require('./BridgeMaker');
const { GAME, USER } = require('./constants/Message');
const BridgeGame = require('./domains/BridgeGame');
const Validator = require('./validator');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { ERROR } = require('./constants/Message');

class GameController {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  *run() {
    OutputView.print(GAME.START);
    const bridgeSize = yield* GameController.#createBridgeSize();
    this.#makeBridge(bridgeSize);
  }

  /**
   * 유저가 입력한 다리 길이를 통해 다리를 생성 후 BridgeGame 클래스 내 answerBridge 필드에 값을 할당하는 메서드
   * @param {number} bridgeSize - 유저가 입력한 다리 길이
   */
  #makeBridge(bridgeSize) {
    const answerBridge = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate,
    );
    this.bridgeGame.setAnswerBridge(answerBridge);
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

  static *#createBridgeSize() {
    let bridgeSize = 0;
    while (true) {
      bridgeSize = yield GameController.#inputBridgeSize;
      if (Validator.isValidate(!Number(bridgeSize), ERROR.BRIDGE_SIZE)) break;
    }
    return bridgeSize;
  }
}

module.exports = GameController;
