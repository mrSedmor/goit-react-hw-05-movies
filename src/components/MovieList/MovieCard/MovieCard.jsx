import PropTypes from 'prop-types';
import api from 'services/api';
import { formatGenres } from 'services/gernres';
import moviePosterPlaceholder from 'images/placeholder-poster.svg';
import css from './movie-card.module.scss';

const MovieCard = ({
  movieInfo: { poster_path, title, vote_average, release_date, genre_ids },
}) => {
  const posterHref = api.getPosterUrl({
    path: poster_path,
    size: 400,
    placeholder: moviePosterPlaceholder,
  });
  const year = release_date ? new Date(release_date).getFullYear() : null;
  const genres = formatGenres(genre_ids);
  const rating = Math.round(vote_average * 10);
  return (
    <div>
      <div className={css.posterWrapper}>
        <img
          className={css.poster}
          src={posterHref}
          alt={title}
          loading="lazy"
        />
        <div className={css.rating}>{rating}%</div>
        {Boolean(year) && <div className={css.year}>{year}</div>}
      </div>

      <div className={css.description}>
        <p className={css.title}>{title}</p>
        <p className={css.genres}> {genres} </p>
      </div>
    </div>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
};
