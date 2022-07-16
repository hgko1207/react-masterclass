## 설치

```bash
npm i react-router-dom react-query
npm i --save-dev @types/react-router-dom
```

## 내용

/ -> All coins
/:id -> /btc -> Coin Detail

/btc/information
/btc/chart

## Router

```ts
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coin from './routes/Coin';
import Coins from './routes/Coins';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId" element={<Coin />}></Route>
        <Route path="/" element={<Coins />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
```

## 에러

react-router-dom이 버전 6로 업그레이드되면서, Switch를 더이상 지원을 안하게 됬습니다. Switch -> Routes로 바꼈습니다. 또한 component도 element로 바꼈습니다.

## Styles

스타일 기본값을 제거합니다.

- https://github.com/zacanger/styled-reset/blob/master/src/index.ts

```ts

```

폰트 설정을 가져와 적용합니다.

- https://fonts.google.com/specimen/Source+Sans+Pro?query=Source+Sans

```ts
import { createGlobalStyle } from 'styled-components';
import Router from './Router';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap');
body {
  font-family: 'Source Sans Pro', sans-serif;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
```

색상 정의합니다.

- https://flatuicolors.com/palette/gb

## 코인 정보 조회

- https://api.coinpaprika.com/
- https://api.coinpaprika.com/v1/coins
- https://coinpaprika.com/ko/

코인 이미지 불러오기

- https://coinicons-api.vercel.app/api/icon/btc
