import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { authOperations } from 'redux/auth';
import Section from 'components/Section';
import Button from 'components/Button/Button';
import s from './RegisterView.module.scss';

const RegisterView = () => {
    // const contacts = useSelector(contactsSelectors.getContacts);
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
                    <p>Name</p>
                    <input
                        className={s.Input}
                        onChange={handleChange}
                        value={user.name}
                        type="text"
                        name="name"
                        required
                    />
                </label>
                <label className={s.Label}>
                    <p>E-mail</p>
                    <input
                        className={s.Input}
                        onChange={handleChange}
                        value={user.email}
                        type="email"
                        name="email"
                        required
                    />
                </label>
                <label className={s.Label}>
                    <p>Password</p>
                    <input
                        className={s.Input}
                        onChange={handleChange}
                        value={user.password}
                        type="password"
                        name="password"
                        required
                    ></input>
                </label>
                <Button label="Register" type="submit" />
            </form>
        </Section>
    );
};

export default RegisterView;
