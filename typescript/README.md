# TypeScript

## 설치

- https://create-react-app.dev/docs/adding-typescript/

`create-react-app` 명령어에 typescript를 추가합니다.

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

## 사용

Prop Types 는 브라우저의 콘솔에 경고표시를 해준다.
Prop Types 는 prop이 거기에 있는지 없는지 확인해주지만 코드를 실행한 후 에만 확인이 가능하다.

TypeScript 를 사용하는 이유는 코드가 실행되지 전에 오류를 확인하기 위해서입니다.
interface 를 사용하여 TypeScript 에게 object shape 을 설명해줍니다.

어떻게 우리 자신과 props 를 interface 를 사용하여 보호하는지
interface 는 object의 shape을 설명해준다.

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

```js
import styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div < ContainerProps > ``;

interface CircleProps {
  bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;
```
