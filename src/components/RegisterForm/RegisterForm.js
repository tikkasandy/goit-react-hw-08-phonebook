import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import Section from 'components/Section';
import s from './RegisterForm.module.scss';

const RegisterForm = () => {
    const dispatch = useDispatch();

    const [user, setUser] = useState({ name: '', email: '', password: '' });
    const [passwordShown, setPasswordShown] = useState(false);

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setUser(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch(authOperations.register(user));
        // reset();
    };

    const reset = () => {
        setUser({ name: '', email: '', password: '' });
    };

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <Section title='Create a new account'>
            <form className={s.Form} onSubmit={handleSubmit}>
                <label className={s.Label}>
                    <input
                        className={s.Input}
                        onChange={handleChange}
                        value={user.name}
                        type="text"
                        name="name"
                        placeholder=" "
                        aria-label='User name'
                        autoFocus
                        required
                    />
                    <span className={s.Placeholder}>User name</span>
                </label>
                <label className={s.Label}>
                    <input
                        className={s.Input}
                        onChange={handleChange}
                        value={user.email}
                        type="email"
                        name="email"
                        placeholder=" "
                        aria-label='Email'
                        required
                    />
                    <span className={s.Placeholder}>Email</span>
                </label>
                <label className={s.Label}>
                    <input
                        className={s.InputPassword}
                        onChange={handleChange}
                        value={user.password}
                        type={passwordShown ? "text" : "password"}
                        name="password"
                        placeholder=" "
                        aria-label='Password'
                        required
                    >
                    </input>
                    <span className={s.Placeholder}>Password (at least 7 characters)</span>
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
                <p className={s.Agreement}>By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy.</p>
                <button className={s.Button} type="submit" >Sign Up</button>
            </form>
        </Section>
    );
};

export default RegisterForm;
