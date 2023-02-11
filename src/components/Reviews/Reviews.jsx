import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from 'services/api';
import css from './reviews.module.scss';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    api
      .getMovieReviews({ movieId })
      .then(({ data }) => setReviews(data.results));
  }, [movieId]);

  if (!reviews) {
    return <p>Loading content...</p>;
  }

  const reviewList = reviews.map(({ author, content, id }) => (
    <li key={id} className={css.item}>
      <span>Author: {author}</span>
      <p className={css.review}>{content}</p>
    </li>
  ));

  return (
    <div>
      {reviews.length > 0 ? (
        <ol className={css.list}>{reviewList}</ol>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
