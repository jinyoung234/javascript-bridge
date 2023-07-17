const deepFreeze = require('../utils/deepFreeze');

const BRIDGE_GAME = deepFreeze({
  BRIDGE_TABLE: {
    '[SUCCESS]D': [' ', 'O'],
    '[SUCCESS]U': ['O', ' '],
    '[FAIL]D': [' ', 'X'],
    '[FAIL]U': ['X', ' '],
  },
  MOVE_TYPE_TABLE: {
    SUCCESS: {
      BOTTOM: '[SUCCESS]D',
      TOP: '[SUCCESS]U',
    },
    FAIL: {
      BOTTOM: '[FAIL]D',
      TOP: '[FAIL]U',
    },
  },
  STATUS_TABLE: {
    SUCCESS: '성공',
    FAIL: '실패',
    PROGRESS: '진행',
  },
});

module.exports = BRIDGE_GAME;
