import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import Section from 'components/Section';
import s from './LoginForm.module.scss';

const LoginForm = () => {
    const dispatch = useDispatch();

    const [user, setUser] = useState({ email: '', password: '' });

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

    return (
        <Section title='Login'>
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
                        required
                    />
                </label>
                <label className={s.Label}>
                    {/* <p>Password</p> */}
                    <input
                        className={s.Input}
                        onChange={handleChange}
                        value={user.password}
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    ></input>
                </label>
                <button className={s.Button} type="submit" >Log In</button>
            </form>
        </Section>

    );
};

export default LoginForm;
