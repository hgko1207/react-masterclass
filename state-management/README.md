## Recoil

- React JS에서 사용할 수 있는 state management library
- 페이스북이 만들었음

- https://recoiljs.org/ko/

```bash
$ npm install recoil
# or
$ yarn add recoil
```

`RecoilRoot` 로 감싸준다.

```ts
// index.ts
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
```

atoms.ts 파일을 생성하고 Recoil의 atom function을 사용하여 필요한 데이터를 설정한다.
atom은 두 가지를 요구하는데 첫 번째는 key로 유일한 이름이어야 함
두 번째는 default 값이다.

```ts
// atoms.ts
import { atom } from 'recoil';

export const IsDarkAtom = atom({
  key: 'isDark',
  default: false,
});
```

컴포넌트가 atom을 읽게 하기 위해서는 useRecoilValue()를 아래와 같이 사용하면 된다.

```ts
import { useRecoilValue } from 'recoil';
import { IsDarkAtom } from './atoms';

const isDark = useRecoilValue(IsDarkAtom);
```

컴포넌트가 atom을 쓰게 하기 위해서는 useSetRecoilState()를 아래와 같이 사용하면 된다.
atom을 읽고 쓰게 하기 위해서는 useRecoilState()를 사용하면 된다.

```ts
const setDarkAtom = useSetRecoilState(IsDarkAtom);
const toggleDarkAtom = () => setDarkAtom((prev) => !prev);

<Header>
  <Title>코인</Title>
  <button onClick={toggleDarkAtom}>Toggle Mode</button>
</Header>;
```

```ts

```
