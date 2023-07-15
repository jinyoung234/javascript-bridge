const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const { GAME } = require('../src/constants/Message');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) =>
      acc.mockImplementationOnce((_, callback) => {
        callback(input);
      }),
    MissionUtils.Console.readLine,
  );
};
const getOutput = (logSpy) => [...logSpy.mock.calls];

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const runException = (inputs) => {
  mockQuestions(inputs);
  const app = new App();
  app.play();
  getOutput(getLogSpy()).forEach((log, i) => {
    if (i === 0) return;
    expectLogContains(log, '[ERROR]');
  });
};

describe('게임 안내 기능', () => {
  test('게임이 시작되면 “다리 건너기 게임을 시작합니다.”를 출력할 수 있어야 한다.', () => {
    const log = getLogSpy();
    const app = new App();
    app.play();
    expect(log).toHaveBeenCalledWith(expect.stringContaining(GAME.START));
  });
});

describe('초기 다리 생성 기능', () => {
  test('사용자 입력 값에 대해 예외를 처리 할 수 있어야 한다.', () => {
    runException(['a', '0', ' ']);
  });
});
