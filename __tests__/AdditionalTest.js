const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const { GAME } = require('../src/constants/Message');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('게임 안내 기능', () => {
  test('게임이 시작되면 “다리 건너기 게임을 시작합니다.”를 출력할 수 있어야 한다.', () => {
    const log = getLogSpy();
    const app = new App();
    app.play();
    expect(log).toHaveBeenCalledWith(expect.stringContaining(GAME.START));
  });
});