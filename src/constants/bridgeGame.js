const deepFreeze = require('../utils/deepFreeze');

const BRIDGE_GAME = deepFreeze({
  BRIDGE_TABLE: {
    '[SUCCESS]D': [' ', 'O'],
    '[SUCCESS]U': ['O', ' '],
    '[FAIL]D': [' ', 'X'],
    '[FAIL]U': ['X', ' '],
  },
  STATUS_TABLE: {
    SUCCESS: {
      BOTTOM: '[SUCCESS]D',
      TOP: '[SUCCESS]U',
    },
    FAIL: {
      BOTTOM: '[FAIL]D',
      TOP: '[FAIL]U',
    },
  },
});

module.exports = BRIDGE_GAME;
