const API_KEY = '8b4c941053c92f80f2f0a95c781d6892';
const BASE_PATH = 'https://developers.themoviedb.org/3';

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
