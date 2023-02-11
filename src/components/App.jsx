import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const Home = lazy(() => import('pages/HomePage/HomePage'));
const Movies = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetail = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetail />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
