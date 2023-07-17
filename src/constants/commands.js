const deepFreeze = require('../utils/deepFreeze');

const COMMANDS = deepFreeze({
  INPUT_BRIDGE: {
    U: 'U',
    D: 'D',
  },
});

module.exports = COMMANDS;
