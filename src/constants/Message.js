const deepFreeze = require('../utils/deepFreeze');

const MESSAGE = deepFreeze({
  GAME: {
    START: '다리 건너기 게임을 시작합니다.\n',
  },
  USER: {
    INPUT_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
    INPUT_MOVE_TYPE: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
    INPUT_GAME_COMMAND: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  },
  ERROR: {
    BRIDGE_SIZE: '[ERROR] : 숫자로 1 이상 입력 해주세요.',
    MOVE_TYPE: '[ERROR] : 이동할 칸은 U 또는 D로 입력해주세요.',
  },
});

module.exports = MESSAGE;
