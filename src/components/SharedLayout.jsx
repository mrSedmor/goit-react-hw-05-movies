import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import css from './shared-layout.module.scss';

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.appNav}>
          <NavLink className={css.navItem} to="/" end>
            Home
          </NavLink>
          <NavLink className={css.navItem} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
