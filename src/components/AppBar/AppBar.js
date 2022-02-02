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
                <div className={s.Navbar}>
                    <h1 className={s.Title}>Phonebook</h1>
                    {isLoggedIn && < UserMenu />}
                </div>
            </Container>
        </header>
    );
}

export default AppBar;
