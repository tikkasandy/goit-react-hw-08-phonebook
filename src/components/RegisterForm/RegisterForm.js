import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import Section from 'components/Section';
import s from './RegisterForm.module.scss';

const RegisterForm = () => {
    const dispatch = useDispatch();

    const [user, setUser] = useState({ name: '', email: '', password: '' });

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setUser(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch(authOperations.register(user));
        reset();
    };

    const reset = () => {
        setUser({ name: '', email: '', password: '' });
    };

    return (
        <Section title='Register'>
            <form className={s.Form} onSubmit={handleSubmit}>
                <label className={s.Label}>
                    {/* <p>Name</p> */}
                    <input
                        className={s.Input}
                        onChange={handleChange}
                        value={user.name}
                        type="text"
                        name="name"
                        placeholder="User name"
                        required
                    />
                </label>
                <label className={s.Label}>
                    {/* <p>E-mail</p> */}
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
                        placeholder="Password (at least 7 characters)"
                        required
                    ></input>
                </label>
                <p className={s.Agreement}>By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy.</p>
                <button className={s.Button} type="submit" >Sign Up</button>
            </form>
        </Section>
    );
};

export default RegisterForm;
