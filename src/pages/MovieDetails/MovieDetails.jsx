import { Suspense, useState, useEffect } from 'react';
import {
  Outlet,
  useParams,
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import api from 'services/api';
import css from './movie-details.module.scss';
import posterPlaceholder from 'images/placeholder-poster.svg';
import { FaArrowLeft } from 'react-icons/fa';

const MovieDetails = () => {
  const location = useLocation();
  const fromHref = location?.state?.from ?? '/';
  const { movieId } = useParams();
  const [details, setDetails] = useState();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    api
      .getMovieDetails({ movieId })
      .then(({ data }) => setDetails(data))
      .catch(error => setError(error?.data?.message ?? error.message));
  }, [movieId]);

  useEffect(() => {
    if (!error) {
      return;
    }
    const timeoutId = setTimeout(() => navigate(fromHref), 2000);
    return () => clearTimeout(timeoutId);
  }, [error]);

  if (error) {
    return (
      <>
        <p>{error}</p>
        <p>Redirecting...</p>
      </>
    );
  }

  if (!details) {
    return <p>Loading content...</p>;
  }

  const { title, vote_average, release_date, overview, poster_path, genres } =
    details;
  const score = Math.round(Number(vote_average) * 10);
  const genreList = genres ? genres.map(({ name }) => name).join(', ') : '';
  return (
    <main className={css.content}>
      <Link to={fromHref} className={css.linkBack}>
        <FaArrowLeft /> Back to movies list
      </Link>
      <div className={css.wrapper}>
        <img
          className={css.poster}
          src={api.getPosterUrl({
            path: poster_path,
            placeholder: posterPlaceholder,
          })}
          width={300}
          alt={title}
        />
        <div className={css.details}>
          <h2>{`${title} (${new Date(release_date).getFullYear()})`}</h2>
          <p>User score: {score}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genreList}</p>
        </div>
      </div>
      <hr />
      <h3>Additional information</h3>
      <div className={css.auxNav}>
        <NavLink className={css.auxNavItem} to="cast">
          Cast
        </NavLink>
        <NavLink className={css.auxNavItem} to="reviews">
          Reviews
        </NavLink>
      </div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
