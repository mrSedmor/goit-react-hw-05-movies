import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from 'services/api';
import MovieList from 'components/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({});
  const params = Object.fromEntries(searchParams);
  const { query = '', newQuery = '', page = 1 } = params;

  useEffect(() => {
    if (!query) {
      return;
    }
    api.getMovies({ query, page }).then(({ data }) => setMovies(data.results));
  }, [query, page]);

  const handleInput = ({ target: { name, value } }) => {
    const normalizedValue = value.trim().toLowerCase();
    const newParams = { ...params };
    if (normalizedValue) {
      newParams[name] = value;
    } else {
      delete newParams[name];
    }
    setSearchParams(newParams);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!newQuery || newQuery === query) {
      return;
    }
    setSearchParams({ page: 1, query: newQuery, ...params });
  };

  return (
    <div>
      <h2>Find a movie:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newQuery"
          onChange={handleInput}
          value={newQuery}
        />
        <button type="submit">Search</button>
      </form>

      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
