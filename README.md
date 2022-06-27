# React Js 마스터 클래스

## 시작

`npx` 명령어로 리액트 프로젝트를 생성하고, 필요 없는 파일들을 지워줍니다.
src 폴더에서 **index.js** 와 **App.js** 파일을 제외한 나머지 파일들을 지워줍니다.

```bash
npx create-react-app react-masterclass
```

## Styled Components

- https://styled-components.com/

```bash
npm i styled-components
```

- Styled-Component 자동 완성을 위해 `vscode-styled-components` 플러그인을 설치합니다.

사용 예

```js
import styled from 'styled-components';

const Father = styled.div`
  display: flex;
`;
const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;
const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;
const Text = styled.span`
  color: white;
`;

function App() {
  return (
    <Father>
      <BoxOne>
        <Text>Hello</Text>
      </BoxOne>
      <BoxTwo />
    </Father>
  );
}
export default App;
```

컴포넌트를 확장하는 방법입니다.

```js
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
const Circle = styled(Box)`
  border-radius: 50px;
`;
```

### 'As' and Attrs

아래와 같이 as 속성을 사용하여 값을 `a` 로 지정하면 button 태그가 a 태그로 바뀝니다.

```js
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

<Btn as="a">Log in</Btn>;
```

### 속성 값 설정

attrs 을 사용하여 HTML 태그에 속성 값을 설정 할 수 있습니다.

```js
const Input = styled.input.attrs({ require: true, minLength: 10 })`
  background-color: tomato;
`;
```

### Animation

`keyframes` 를 추가하고, Animation 을 설정합니다. 그리고 styled components 에 `${}` 를 통해 설정된 변수를 지정합니다.

```js
import styled, { keyframes } from 'styled-components';

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
`;

function App() {
  return (
    <Wrapper>
      <Box />
    </Wrapper>
  );
}

export default App;
```

### Theme