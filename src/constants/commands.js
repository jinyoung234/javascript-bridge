const deepFreeze = require('../utils/deepFreeze');

const COMMANDS = deepFreeze({
  INPUT_BRIDGE: {
    U: 'U',
    D: 'D',
  },
  INPUT_EXIT: {
    RESTART: 'R',
    QUIT: 'Q',
  },
});

module.exports = COMMANDS;
