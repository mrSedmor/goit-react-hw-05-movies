import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';
import MovieCard from './MovieCard/MovieCard';
import css from './movie-list.module.scss';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map(({ id, ...movieInfo }) => (
        <li key={id} className={css.item}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <MovieCard movieInfo={movieInfo} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

MovieList.defaultValues = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
