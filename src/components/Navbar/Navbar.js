import { NavLink } from 'react-router-dom';
import s from './Navbar.module.scss';

const Navbar = () => (
  <ul className={s.List}>
    <li>
      <NavLink to="/" exact className={s.Item} activeClassName={s.Active}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/contacts" className={s.Item} activeClassName={s.Active}>
        Contacts
      </NavLink>
    </li>
  </ul>
);

export default Navbar;
