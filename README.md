# SSR

### **eject**

> **eject는 해당 프로젝트에 걸려서 숨겨져 있는 모든 설정을 밖으로 추출해주는 명령어다.**
실행하면, **CRA에 종속되어 있던 많은 설정들이 나타나게 된다.**
[https://helloinyong.tistory.com/174](https://helloinyong.tistory.com/174)
> 

### **엔트리**

> `src/index.server.js`

웹팩의 진입점 (시작 파일)으로 내부에 필요한 다른 컴포넌트와 모듈을 불러온다.
서버 사이드 렌더링을 위해서는 서버를 위한 엔트리 파일을 따로 생성해야 한다.
> 

### **경로 추가**

> `config/paths`

**진입점과, 웹팩 처리 후 저장 경로** 이 두 가지를 추가해준다.
> 

### **웹팩 환경 설정**

> `config/webpack.config.server.js` 

0. 웹팩의 `mode`와 `실행 환경` 그리고 빌드 시 `진입점`과 `결과물 저장경로`를 정해준다.
1. **로더** 설정 - 웹팩에서의 로더는 파일을 불러올 때 확장자에 맞게 필요한 처리를 해준다. 또한 모든 CSS 코드를 결합, 이미지 파일은 파일을 다른 경로에 따로 저장하여 그 파일에 대한 경로를 자바스크립트에서 참조할 수 있게 설정해준다.
2. 서버를 위한 번들링 -  **`webpack-node-extension`** 를 활용,  node_modules에서 바로 불러오는 것을 제외하고 번들링하도록 설정
3. **환경변수를 주입 -** 프로젝트 내에서 process.env_NODE_ENV 값을 참조하여 현재 개발 환경인지 아닌지를 알 수 있다.
> 

<img width="726" alt="Untitled" src="https://user-images.githubusercontent.com/68996680/208571301-0a302680-7fe9-43b5-b540-901dbe4c9716.png">


### **빌드 스크립트 작성**

> `src/scripts/build.server.js`

스크립트를 통해 실행될 함수를 설정한다.
웹팩에 config 설정을 적용한 후, 진입 파일로부터 웹팩을 통한 컴파일을 시작해서 결과물을 생성한다.
> 

### **express로 html 반환**

> - StaticRouter 경로에 맞는 react 요소를 정적 페이지(html)로 변환한 후 사용자에게 리턴
- js, css의 적용 : asset-manifest.json에서 파일 경로들을 조회하여 chunk.js로 끝나는 키를 찾아 스크립트 태그로 변환하고 html에 합친다.
> 

<img width="735" alt="Untitled 1" src="https://user-images.githubusercontent.com/68996680/208571486-d40fd2a7-d0eb-48b4-8951-e7a2a2dc32f1.png">

---

### 정리

- eject로 웹팩을 직접 설정하여 `renderToString()` 메소드를 활용한 정적 파일 번들링
express로 html 페이지 제공

### 회고

- `[ReactDOM.hydrateRoot()](https://ko.reactjs.org/docs/react-dom-client.html#hydrateroot)` 과정을 추가로 적용해봐야 될 듯
- Next.js는 내부적으로 어떻게 구성되어 있는지 궁금해짐

---

### 참고

- [https://korinkorin.tistory.com/78](https://korinkorin.tistory.com/78)
- [https://joshua1988.github.io/webpack-guide/concepts/plugin.html#plugin](https://joshua1988.github.io/webpack-guide/concepts/plugin.html#plugin)