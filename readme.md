## DSC-GIT-Tutorial

안녕하세요 ! DSC Git 세션입니다!

### 설치 및 실행

먼저 해당 레포지를 클론 받아 주세요:-)
그 이후 아래 설명에 따라 설치와 실행을 진행 합니다.

이 프로젝트는 `git`와 `nodejs`를 사용하고 있습니다. 본 프로그램들이 기본적으로 설치되어 있어야 진행할 수 있습니다.

-   [git 설치](https://git-scm.com/downloads)
-   [nodejs 설치](https://nodejs.org/ko/download/)

위 항목들을 모두 설치해준 후, 아래와 같은 명령어를 `powershell` / `cmd` / `git bash` / `terminal` 등에서 클론받은 Git-Tutorial-V2 내부로 이동 후 실행해주세요.
```bash
> cd Git-Tutorial-V2
```
```bash
> npm run module-install
> npm start
```
이후 주소창에 [http://localhost:3000/](http://localhost:3000/) 을 입력하면 튜토리얼 페이지가 실행된것을 볼 수 있습니다!

### 오류가 발생할 경우

`bower` , `nodemon`에 대해서 존재하지 않는 명령어라는 오류가 발생할 수 있습니다. 그떄는 아래와 같은 명령어를 실행해주세요.

```bash
> npm install -g bower
> npm install -g nodemon
```

### 기능

설치를 모두 마친 후 실행하면, 몇가지 내용을 화면에서 확인할 수 있습니다.

-   [x] 추가된 실습 참여자들의 목록
-   [x] 현재 저장소의 모든 커밋 목록

### 출석부 추가하기

실습을 진행하는 주요 내용은 `users.json`파일을 수정하여 출석부를 채워보는 것입니다.
`data`폴더에 있는 `users.json`에 본인의 정보를 입력해주신 후 저장한 다음 `push` 해주시면 됩니다.

추가할 데이터 형태는 다음과 같습니다.

```javascript
[
    // ..
    { name: "KyeongSoo Yoo", github: "YOOGOMJA", comment: "신기하네요" },
    // name: 이름
    // github : github 계정명
    // comment : 하고싶은 말
];
```

❗️주의❗️
입력하실 때, 목록의 가장 하단부에 추가해주세요. 그리고, 본인의 이전 내용에는 `,`를 반드시 추가해주셔야 합니다.
가장 마지막 줄에 `,`가 있으면 오류가 생길 수 있습니다.

```javascript
// 예시
// before
[{ name: "KyeongSoo Yoo", github: "YOOGOMJA", comment: "신기하네요" }];

// after
[
    { name: "KyeongSoo Yoo", github: "YOOGOMJA", comment: "신기하네요" },
    { name: "SeongHyeon Bae", github: "baeseongh", comment: "넘나 어렵네요" }
];
```

이후 `github` 저장소로 `push`해주시면 됩니다.
