const deepFreeze = require('../utils/deepFreeze');

const MESSAGE = deepFreeze({
  GAME: {
    START: '다리 건너기 게임을 시작합니다.\n',
  },
  USER: {
    INPUT_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  },
  ERROR: {
    BRIDGE_SIZE: '[ERROR] : 숫자로 1 이상 입력 해주세요.',
  },
});

module.exports = MESSAGE;
