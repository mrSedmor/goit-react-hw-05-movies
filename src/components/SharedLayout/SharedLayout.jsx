import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import css from './shared-layout.module.scss';

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <Header />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
