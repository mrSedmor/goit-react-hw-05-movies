import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from 'services/api';
import css from './cast.module.scss';
import placeholderMale from 'images/placeholder-male.svg';
import placeholderFemale from 'images/placeholder-female.svg';

const getPlaceholder = gender =>
  gender === 1 ? placeholderFemale : placeholderMale;

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState();
  useEffect(() => {
    api.getMovieCredits({ movieId }).then(({ data }) => setCast(data.cast));
  }, [movieId]);

  if (!cast) {
    return <p>Loading content...</p>;
  }

  return (
    <ul className={css.list}>
      {cast.map(({ cast_id, character, name, profile_path, gender }) => {
        const posterUrl = api.getPosterUrl({
          path: profile_path,
          placeholder: getPlaceholder(gender),
        });
        return (
          <li key={cast_id} className={css.card}>
            <img className={css.poster} src={posterUrl} alt={name} />
            <div className={css.description}>
              <p className={css.name}>{name}</p>
              <p className={css.character}>
                <span className={css.caption}>Character: </span>
                {character}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
