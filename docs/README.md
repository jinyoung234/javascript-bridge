# 구현할 기능 목록

## 기능 목록

- 게임 안내 기능 (start-phase)

  - 게임이 시작되면 “다리 건너기 게임을 시작합니다.”를 출력할 수 있어야 한다.

- 초기 다리 생성 기능 (create-phase)

  - 유저는 다리의 길이를 숫자로 입력 받을 수 있어야 한다.

    - 만약 잘못된 값을 입력했다면 throw 문을 통해 예외를 발생시키고 "[ERROR]"로 시작하는 에러 메시지를 출력 후 다시 입력 받는다.

  - 다리를 생성할 경우 위 칸, 아래 칸에 대해서 0과 1중 무작위 값을 이용해서 정한다.
    - 무작위 값이 1이면 위 칸, 0이면 아래 칸이 건널 수 있는 칸이 된다.
    - 위 칸을 건널 수 있다면 다리에 U, 아래 칸을 건널 수 있다면 다리에 D 값으로 나타낸다.
    - 다리는 BridgeMaker 객체를 통해 생성 해야 한다.
    - 무작위 숫자는 BridgeRandomNumberGenerator를 통해 생성 해야 한다.

- 다리 이동 기능 (play phase)

  - 다리의 길이를 입력 받은 후 유저는 라운드마다 플레이어가 이동할 칸을 입력 받을 수 있어야 한다.
    - U와 D중 하나만 입력 가능해야 하며, 그 이외의 값이 들어온다면 1.1.1 처럼 다시 입력 받을 수 있어야 한다.
  - 입력이 완료 되면 라운드 수 만큼의 다리로 update 되며 만약 건널 수 있다면 해당 칸에 O를, 건널 수 없다면 X로 표시 한다.
    - 다리를 건너다 실패하면 게임을 재시작하거나 종료할 수 있어야 한다.
    - 재 시작 할 경우 초기에 생성한 다리를 재 사용할 수 있어야 한다.
    - 게임 결과의 총 시도한 횟수는 첫 시도를 포함해 게임을 종료할 때까지 시도한 횟수를 나타낼 수 있어야 한다.

- 게임 종료 기능 (Exit phase)
  - 만약 유저가 다리를 끝까지 건너면 게임이 종료될 수 있어야 한다.
    - 게임 결과의 총 시도한 횟수는 첫 시도를 포함해 게임을 종료할 때까지 시도한 횟수를 나타낼 수 있어야 한다.

## 프로젝트 환경 및 코드 스타일

- 프로젝트 환경

  - Node.js 14 버전 사용

- 코드 스타일

  - <details>
      <summary>eslint 사용</summary>

    `npm init @eslint/config` 로 설치하고 .eslintrc.js 파일을 생성하여 코드 스타일을 정의한다.
    </details>

  - <details>
      <summary>prettier 사용</summary>

    `npm i -D prettier eslint-config-prettier` 로 설치한다.

    > `eslint-config-prettier`: prettier와 겹치는 eslint 룰을 비활성화한다.

    .eslintrc.js의 `extends: [...]` 에 `prettier` 를 마지막에 추가한다.

    .prettierrc 파일을 생성한 후 prettier 규칙을 추가한다.
    </details>

  - <details>
      <summary>airbnb 규칙 사용</summary>

    eslint 초기 설정 때 코드 스타일로 airbnb로 설정한다.

    .eslintrc.js의 `extends: [...]` 에 `airbnb-base` 를 추가한다.
    </details>
