const OutputView = require('../view/OutputView');

class Validator {
  /**
   * 조건이 맞는지 아닌지 판별 후 조건에 해당된다면 에러를 반환 하고 errorMessage를 출력 후 false를 반환 하며
   * 그렇지 않다면 true를 반환하는 메서드
   * @param {boolean} condition - 에러를 반환할 조건
   * @param {string} errorMessage - 에러 원인에 대한 메시지
   * @returns {boolean} 조건에 부합하지 않으면 true 그렇지 않다면 false를 반환
   */
  static isValidate(condition, errorMessage) {
    try {
      if (condition) throw new Error(errorMessage);
      return true;
    } catch (err) {
      OutputView.print(err);
      return false;
    }
  }
}

module.exports = Validator;
