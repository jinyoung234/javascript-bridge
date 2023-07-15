const { Console } = require('@woowacourse/mission-utils');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   * @param {string} message - 콘솔에서 보여질 메시지
   * @param {(inputValue : string) => void} query - 유저로 부터 받은 값을 인자로 하는 콜백 함수
   */
  readBridgeSize(message, query) {
    Console.readLine(message, query);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
