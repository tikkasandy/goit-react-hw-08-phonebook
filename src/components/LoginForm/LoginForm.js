import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import Section from 'components/Section';
import s from './LoginForm.module.scss';

const LoginForm = () => {
    const dispatch = useDispatch();

    const [user, setUser] = useState({ email: '', password: '' });
    const [passwordShown, setPasswordShown] = useState(false);

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setUser(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch(authOperations.logIn(user));

        reset();
    };

    const reset = () => {
        setUser({ email: '', password: '' });
    };

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <Section title='Log Into Phonebook'>
            <form className={s.Form} onSubmit={handleSubmit}>
                <label className={s.Label}>
                    {/* <p>Email</p> */}
                    <input
                        className={s.Input}
                        onChange={handleChange}
                        value={user.email}
                        type="email"
                        name="email"
                        placeholder="Email"
                        autoFocus
                        required
                    />
                </label>
                <label className={s.Label}>
                    {/* <p>Password</p> */}
                    <input
                        className={s.Input}
                        onChange={handleChange}
                        value={user.password}
                        type={passwordShown ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        required
                    >
                    </input>
                    <button
                        className={s.ShowButton}
                        onClick={togglePassword}
                        type="button"
                        title={passwordShown ? "Hide password" : "Show password"}
                        arial-label={passwordShown ? "Hide password" : "Show password"}>
                        {passwordShown
                            ? <MdOutlineVisibility className={s.ShowSvg} />
                            : <MdOutlineVisibilityOff className={s.ShowSvg} />}
                    </button>
                </label>
                <button className={s.Button} type="submit">Log In</button>
            </form>
        </Section>

    );
};

export default LoginForm;
