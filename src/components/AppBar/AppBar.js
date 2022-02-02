import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import Container from 'components/Container';
import UserMenu from 'components/UserMenu';
import s from './AppBar.module.scss';

const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <header className={s.Header}>
            <Container>
                {isLoggedIn
                    ? <div className={s.NavbarRight}>
                        <UserMenu />
                    </div>
                    : <div className={s.NavbarLeft}>
                        <h1 className={s.Title}>Phonebook</h1>
                    </div>}
            </Container>
        </header>
    );
}

export default AppBar;
