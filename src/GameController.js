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
    yield* this.#moveBridge();
  }

  *#moveBridge() {
    let status = '';
    while (status !== '성공' && status !== '실패') {
      const userMoveType = yield* GameController.#createBridgeMoveType();
      this.bridgeGame.move(userMoveType);
      status = this.bridgeGame.getStatus();
      OutputView.printMap(this.bridgeGame.getBridge());
    }
    return status === '실패' ? yield* this.#fail(status) : this.#success(status);
  }

  #success(status) {
    const [top, bottom] = this.bridgeGame.getBridge();
    const count = this.bridgeGame.getCount();
    OutputView.printResult({ top, bottom, status, count, isSuccess: true });
  }

  *#fail(status) {
    const command = yield* GameController.#createGameCommand();
    if (command === 'R') {
      this.bridgeGame.retry();
      yield* this.#moveBridge();
      return;
    }
    const [[top, bottom], count] = [this.bridgeGame.getBridge(), this.bridgeGame.getCount()];
    OutputView.printResult({ top, bottom, status, count });
  }

  /**
   * 유저가 입력한 다리 길이를 통해 다리를 생성 후 BridgeGame 클래스 내 answerBridge 필드에 값을 할당하는 메서드
   * @param {number} bridgeSize - 유저가 입력한 다리 길이
   */
  #makeBridge(bridgeSize) {
    const answerBridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
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

  static *#createGameCommand() {
    const command = yield GameController.#inputGameCommand;
    return command;
  }

  static *#createBridgeSize() {
    let bridgeSize = 0;
    while (true) {
      bridgeSize = yield GameController.#inputBridgeSize;
      if (Validator.isValidate(!Number(bridgeSize), ERROR.BRIDGE_SIZE)) break;
    }
    return bridgeSize;
  }

  static *#createBridgeMoveType() {
    let moveType = '';
    while (true) {
      moveType = yield GameController.#inputBridgeMoveType;
      const isIncorrectMoveType = moveType !== 'D' && moveType !== 'U';
      if (Validator.isValidate(isIncorrectMoveType, ERROR.MOVE_TYPE)) break;
    }
    return moveType;
  }

  static #inputBridgeMoveType(callback) {
    InputView.readMoving(USER.INPUT_MOVE_TYPE, (inputValue) => {
      callback(inputValue);
    });
  }

  static #inputGameCommand(callback) {
    InputView.readGameCommand(USER.INPUT_GAME_COMMAND, (inputValue) => {
      callback(inputValue);
    });
  }
}

module.exports = GameController;
