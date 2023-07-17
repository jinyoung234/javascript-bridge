const { ERROR } = require('../constants/Message');
const {
  BRIDGE_TABLE,
  MOVE_TYPE_TABLE: { SUCCESS, FAIL },
  STATUS_TABLE,
} = require('../constants/bridgeGame');
const { INPUT_BRIDGE } = require('../constants/commands');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #answerBridge;

  #bridge;

  #round;

  #count;

  constructor() {
    this.#answerBridge = [];
    this.#bridge = [[], []];
    this.#round = 0;
    this.#count = 1;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moveType) {
    this.#round += 1;
    const answer = this.#answerBridge[this.#round - 1];
    const bridgeType = BridgeGame.#createBridgeType(moveType, answer);
    this.#setBridge(bridgeType);
  }

  #setBridge(type) {
    const [top, bottom] = BRIDGE_TABLE[type];
    const [topBridge, bottomBridge] = this.#bridge;
    topBridge.push(top);
    bottomBridge.push(bottom);
  }

  static #createBridgeType(moveType, answerMoveType) {
    const [isMoveBottom, isMoveTop] = [moveType === INPUT_BRIDGE.D, moveType === INPUT_BRIDGE.U];
    const [isSuccess, isFail] = [moveType === answerMoveType, moveType !== answerMoveType];
    if (isSuccess && isMoveBottom) return SUCCESS.BOTTOM;
    if (isSuccess && isMoveTop) return SUCCESS.TOP;
    if (isFail && isMoveBottom) return FAIL.BOTTOM;
    if (isFail && isMoveTop) return FAIL.TOP;
    throw new Error(ERROR.MOVE_TYPE);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#count += 1;
    this.#round -= 1;
    const [topBridge, bottomBridge] = this.#bridge;
    topBridge.splice(-1, 1);
    bottomBridge.splice(-1, 1);
  }

  /**
   * BridgeGame 클래스 내 answerBridge 필드에 값을 할당하기 위한 함수
   * @param {string[]} answerBridge - Controller로 부터 전달받은 건너가야 할 다리
   */
  setAnswerBridge(answerBridge) {
    this.#answerBridge = answerBridge;
  }

  getBridge() {
    const [topBridge, bottomBridge] = this.#bridge;
    const bridge = [`[ ${topBridge.join(' | ')} ]`, `[ ${bottomBridge.join(' | ')} ]`];
    return bridge;
  }

  getStatus() {
    const [topBridge, bottomBridge] = this.#bridge;
    const isIncorrectBridge = (bridge) => bridge === 'X';
    const isFinish = this.#round === this.#answerBridge.length;
    const isSuccessTop = !topBridge.some(isIncorrectBridge);
    const isSuccessBottom = !bottomBridge.some(isIncorrectBridge);
    if (isFinish && isSuccessTop && isSuccessBottom) return STATUS_TABLE.SUCCESS;
    if (topBridge.includes('X') || bottomBridge.includes('X')) return STATUS_TABLE.FAIL;
    return STATUS_TABLE.PROGRESS;
  }

  getCount() {
    return this.#count;
  }
}

module.exports = BridgeGame;
