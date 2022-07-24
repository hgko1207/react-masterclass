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

## 코인 리스트 조회

```ts
useEffect(() => {
  (async () => {
    const response = await fetch('https://api.coinpaprika.com/v1/coins');
    const json = await response.json();
    setCoins(json.slice(0, 100));
    setLoading(false);
  })();
}, []);
```

더 간편하게 변경

```ts
useEffect(() => {
  (async () => {
    const response = await (await fetch('https://api.coinpaprika.com/v1/coins')).json();
    setCoins(json.slice(0, 100));
    setLoading(false);
  })();
}, []);
```

## 코인 가격 정보 조회

```ts
const priceData = await(await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json();
console.log(priceData);
```

## Nested routes

route안에 있는 또 다른 route 이다.

React Router v6로 업그레이드 되면서 변경된 부분이 있다.

- https://ui.dev/react-router-nested-routes/

```ts
// 기존
// Router.tsx
<Route path="/:coinId" element={<Coin />}></Route>;

// coin.tsx
import { Switch, Route } from 'react-router';
import Chart from './Chart';
import Price from './Price';

<Switch>
  <Route path={`/${coinId}/price`}>
    <Price />
  </Route>
  <Route path={`/${coinId}/chart`}>
    <Chart />
  </Route>
</Switch>;
```

```ts
// 변경
// Router.tsx
<Route path="/:coinId/*" element={<Coin />}></Route>;

// coin.tsx
import { Routes, Route } from 'react-router';
import Chart from './Chart';
import Price from './Price';

<Routes>
  <Route path="price" element={<Price />}></Route>
  <Route path="chart" element={<Chart />}></Route>
</Routes>;
```

## useMatch

useMatch는 특정한 URL에 있는지의 여부를 알려준다.

```ts
// 정의
const priceMatch = useMatch('/:coinId/price');
const chartMatch = useMatch('/:coinId/chart');

// 사용
const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) => (props.isActive ? props.theme.accentColor : props.theme.textColor)};
  a {
    display: block;
  }
`;

<Tabs>
  <Tab isActive={chartMatch !== null}>
    <Link to={`/${coinId}/chart`}>Chart</Link>
  </Tab>
  <Tab isActive={priceMatch !== null}>
    <Link to={`/${coinId}/price`}>Price</Link>
  </Tab>
</Tabs>;
```

## React Query

- https://react-query-v3.tanstack.com/installation

우리 스스로 실행하고 있었던 로직들을 축약해준다.
로딩이 보이지 않은 이유는 React Query가 데이터를 캐시에 저장해두기 때문이다.

```bash
$ npm i react-query
# or
$ yarn add react-query
```

## 기타

```js
// 코인 정보들
let temp1 = {...};

// 배열 객체 키만 조회
Object.keys(temp1).join();

// 배열 객체 값의 타입만 조회
Object.values(temp1).map((v) => typeof v).join();
```

## ApexChart

- https://apexcharts.com/docs/installation/

설치

```bash
$ npm install react-apexcharts apexcharts --save
```

사용

```js
import ApexCharts from 'react-apexcharts';
```

## Helmet

html의 head를 변경한다.

```bash
$ npm i react-helmet
$ npm i --save-dev @types/react-helmet
```

```ts
import { Helmet } from 'react-helmet';

<Helmet>
  <title>코인</title>
</Helmet>;
```
