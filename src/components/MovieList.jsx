import { useLocation, NavLink } from 'react-router-dom';
import MovieCard from './MovieCard';
import css from './movie-list.module.scss';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map(({ id, ...movieInfo }) => (
        <li key={id} className={css.item}>
          <NavLink to={`/movies/${id}`} state={{ from: location }}>
            <MovieCard movieInfo={movieInfo} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
