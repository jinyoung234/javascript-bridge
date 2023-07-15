/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #answerBridge;

  constructor() {
    this.#answerBridge = [];
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {}

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  /**
   * BridgeGame 클래스 내 answerBridge 필드에 값을 할당하기 위한 함수
   * @param {string[]} answerBridge - Controller로 부터 전달받은 건너가야 할 다리
   */
  setAnswerBridge(answerBridge) {
    this.#answerBridge = answerBridge;
  }
}

module.exports = BridgeGame;
