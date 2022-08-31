import { useQuery } from 'react-query';
import { getMovies } from '../api';

function Home() {
  const { data, isLoading } = useQuery(['movies', 'nowPlaying'], getMovies);
  return (
    <div style={{ backgroundColor: 'whitesmoke', height: '200vh' }}>Home</div>
  );
}

export default Home;
