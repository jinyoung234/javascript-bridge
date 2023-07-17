const { BRIDGE_TABLE } = require('../constants/bridgeGame');

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
    const type = BridgeGame.#isSuccess(moveType, answer);
    this.#setBridge(type);
  }

  #setBridge(type) {
    const [top, bottom] = BRIDGE_TABLE[type];
    const [topBridge, bottomBridge] = this.#bridge;
    topBridge.push(top);
    bottomBridge.push(bottom);
  }

  static #isSuccess(moveType, answerMoveType) {
    if (moveType === answerMoveType && moveType === 'D') return '[SUCCESS]D';
    if (moveType === answerMoveType && moveType === 'U') return '[SUCCESS]U';
    if (moveType !== answerMoveType && moveType === 'D') return '[FAIL]D';
    if (moveType !== answerMoveType && moveType === 'U') return '[FAIL]U';
    throw new Error('잘못된 값 입니다.');
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
    return [`[ ${topBridge.join(' | ')} ]`, `[ ${bottomBridge.join(' | ')} ]`];
  }

  getStatus() {
    const [topBridge, bottomBridge] = this.#bridge;
    const isFinish = this.#round === this.#answerBridge.length;
    const isSuccessTop = !topBridge.some((bridge) => bridge === 'X');
    const isSuccessBottom = !bottomBridge.some((bridge) => bridge === 'X');
    if (isFinish && isSuccessTop && isSuccessBottom) return '성공';
    if (topBridge.includes('X') || bottomBridge.includes('X')) return '실패';
    return '진행';
  }

  getCount() {
    return this.#count;
  }
}

module.exports = BridgeGame;
