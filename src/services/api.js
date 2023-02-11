import axios from 'axios';

const API_KEY = '06ae09073235b2b05f047c5928d7f44e';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

const MEDIA_TYPE = {
  all: 'all',
  movie: 'movie',
  tv: 'tv',
  person: 'person',
};

const TIME_WINDOW = {
  day: 'day',
  week: 'week',
};

const getTrending = ({
  page = 1,
  mediaType = MEDIA_TYPE.movie,
  timeWindow = TIME_WINDOW.week,
} = {}) => {
  return instance.get(`/trending/${mediaType}/${timeWindow}`, {
    params: { page },
  });
};

const getMovies = ({ page = 1, query }) => {
  return instance.get('/search/movie', { params: { page, query } });
};

const getMovieDetails = ({ movieId }) => {
  return instance.get(`/movie/${movieId}`).catch(error => {
    if ((error.response.status = 404)) {
      throw Error(`Sorry. There is no movie with id ${movieId}`);
    }

    throw error;
  });
};

const getMovieCredits = ({ movieId }) => {
  return instance.get(`/movie/${movieId}/credits`);
};

const getMovieReviews = ({ movieId }) => {
  return instance.get(`/movie/${movieId}/reviews`);
};

const getPosterUrl = ({ path, size = 300, placeholder }) =>
  path ? `https://image.tmdb.org/t/p/w${size}${path}` : placeholder;

const api = {
  MEDIA_TYPE,
  TIME_WINDOW,
  getTrending,
  getMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
  getPosterUrl,
};

export default api;
