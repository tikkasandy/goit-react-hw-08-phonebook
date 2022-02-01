import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.scss';

const Navbar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <ul className={s.List}>
      <li>
        <NavLink to="/" exact className={s.Item} activeClassName={s.Active}>
          Home
        </NavLink>
      </li>

      {isLoggedIn && (<li>
        <NavLink to="/contacts" className={s.Item} activeClassName={s.Active}>
          Contacts
        </NavLink>
      </li>)}
    </ul>
  );
}

export default Navbar;
