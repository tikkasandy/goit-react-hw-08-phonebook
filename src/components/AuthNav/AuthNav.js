import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.scss';

const AuthNav = () => (
    <ul className={s.List}>
        <li>
            <NavLink to="/register" className={s.Item} activeClassName={s.Active}>
                Register
            </NavLink>
        </li>
        <li>
            <NavLink to="/login" className={s.Item} activeClassName={s.Active}>
                Login
            </NavLink>
        </li>
    </ul>
);

export default AuthNav;
