const deepFreeze = require('../utils/deepFreeze');

const BRIDGE_GAME = deepFreeze({
  BRIDGE_TABLE: {
    '[SUCCESS]D': [' ', 'O'],
    '[SUCCESS]U': ['O', ' '],
    '[FAIL]D': [' ', 'X'],
    '[FAIL]U': ['X', ' '],
  },
});

module.exports = BRIDGE_GAME;
