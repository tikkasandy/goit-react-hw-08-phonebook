import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
// import { authSelectors, authOperations } from '../../redux/auth';
// import defaultAvatar from './default-avatar.png';
import s from './UserMenu.module.scss';


const UserMenu = () => {
    const name = useSelector(authSelectors.getUserName)
    const dispatch = useDispatch();


    return (
        // <></>
        <div className={s.Container}>
            {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
            <span className={s.Item}>Hello, {name}</span>
            <button className={s.Button} type="button" onClick={() => dispatch(authOperations.logOut())}>
                {/* <button className={s.Button} type="button"> */}
                Log Out
            </button>
        </div>
    );
};

export default UserMenu;