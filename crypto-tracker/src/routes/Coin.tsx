import { useParams } from 'react-router';

type RouteParams = {
  coinId: string;
};

function Coin() {
  const { coinId } = useParams<RouteParams>();
  return <h1>Coin: {coinId}</h1>;
}

export default Coin;
