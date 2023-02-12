import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from 'services/api';
import MovieList from 'components/MovieList/MovieList';
import css from './movies.module.scss';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({});
  const searchParamsObj = Object.fromEntries(searchParams);
  const { query = '', newQuery = '', page = 1 } = searchParamsObj;

  useEffect(() => {
    if (!query) {
      return;
    }
    api.getMovies({ query, page }).then(({ data }) => setMovies(data.results));
  }, [query, page]);

  const handleInput = ({ target: { name, value } }) => {
    const normalizedValue = value.trim().toLowerCase();
    const newParams = { ...searchParamsObj };
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
    setSearchParams({ ...searchParamsObj, page: 1, query: newQuery });
  };

  return (
    <div>
      <h2>Find a movie:</h2>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          className={css.input}
          name="newQuery"
          onChange={handleInput}
          value={newQuery}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>

      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
