import { useState, useEffect } from 'react';
import MovieList from 'components/MovieList/MovieList';
import api from 'services/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    api
      .getTrending({ page: 1 })
      .then(({ data }) => setTrendingMovies(data.results))
      .catch(() => null);
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={trendingMovies} />
    </div>
  );
};

export default Home;
