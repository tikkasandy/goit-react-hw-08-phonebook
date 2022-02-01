import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import AuthNav from 'components/AuthNav';
import Navbar from 'components/Navbar';
import Section from 'components/Section';
import UserMenu from 'components/UserMenu';
import s from './AppBar.module.scss';

const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <header className={s.Navbar}>
            {/* <Section> */}
            <Navbar />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
            {/* </Section> */}
        </header>
    );
}

export default AppBar;
