import { NavLink } from 'react-router-dom';
import css from './header.module.scss';

const Header = () => (
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
);

export default Header;
