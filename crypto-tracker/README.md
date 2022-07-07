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
