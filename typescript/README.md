# TypeScript

TypeScript를 사용하는 이유는 코드가 실행되기 전에 오류를 확인하기 위해서입니다.

## 설치

- https://create-react-app.dev/docs/adding-typescript/

`create-react-app` 명령어에 typescript 옵션을 추가합니다.

```bash
npx create-react-app typescript --template typescript
```

typescript를 추가하지 않은 기존 프로젝트가 있다면 아래 명령어로 설치합니다.

```bash
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

typescript 사용 시 styled-components 부분에서 에러가 날 경우 아래 명령어로 설치합니다.

```bash
npm i --save-dev @types/styled-components
```

## Typing the Props

Prop Types는 코드를 실행한 후 에만 브라우저의 콘솔에 경고표시로 확인이 가능합니다. TypeScript를 사용하는 이유는 코드가 실행되기 전에 오류를 확인하기 위해서입니다.

`interface`는 일반적으로 타입 체크를 위해 사용되며 변수, 함수, 클래스에 사용할 수 있다.

```js
import Circle from './Circle';

function App() {
  return (
    <div>
      <Circle bgColor="teal" />
      <Circle bgColor="tomato" />
    </div>
  );
}

export default App;
```

```ts
import styled from 'styled-components';

interface CircleProps {
  bgColor: string;
}

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: ${(props) => props.bgColor};
`;

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;
```

## Optional Props

props는 기본으로 required 이지만 `interface`의 object 뒤에 `?`를 추가하여 optional 될 수 있도록 변경 가능합니다.

```ts
import styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string; // object뒤에 ?를 추가 => Option props
  text?: string;
}

function Circle({ bgColor, borderColor, text = 'default text' }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? 'white'}>
      {text}
    </Container>
  );
}

export default Circle;
```
