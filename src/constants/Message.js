const deepFreeze = require('../utils/deepFreeze');

const MESSAGE = deepFreeze({
  GAME: {
    START: '다리 건너기 게임을 시작합니다.',
  },
});

module.exports = MESSAGE;