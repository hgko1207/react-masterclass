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

- Styled-Component 자동 완성을 위해 `vscode-styled-components` 플러그인을 설치합니다.
