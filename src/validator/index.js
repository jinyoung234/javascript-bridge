const { ERROR } = require('../constants/Message');
const OutputView = require('../view/OutputView');

class Validator {
  static isValidateBridgeSize(size) {
    try {
      if (!size) throw new Error(ERROR.BRIDGE_SIZE);
      return true;
    } catch (err) {
      OutputView.print(err);
      return false;
    }
  }
}

module.exports = Validator;
