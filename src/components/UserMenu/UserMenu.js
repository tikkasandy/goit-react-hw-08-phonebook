import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { MdOutlineLogout } from 'react-icons/md';
import s from './UserMenu.module.scss';

const UserMenu = () => {
    const name = useSelector(authSelectors.getUserName)
    const dispatch = useDispatch();
    const avatar = name.charAt(0);

    return (
        <div className={s.Menu}>
            <div className={s.User} >
                <span className={s.Avatar}>{avatar}</span>
                <span className={s.Name}>Hello, {name}</span>
            </div>
            <button className={s.Button} type="button" onClick={() => dispatch(authOperations.logOut())}>
                <MdOutlineLogout className={s.ButtonSvg} />
            </button>
        </div>
    );
};

export default UserMenu;