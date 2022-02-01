import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { contactsOperations, contactsSelectors } from 'redux/contacts';
import Section from 'components/Section';
import Button from 'components/Button/Button';
import s from './LoginView.module.scss';

const LoginView = () => {
    // const contacts = useSelector(contactsSelectors.getContacts);
    // const dispatch = useDispatch();

    const [user, setUser] = useState({ email: '', password: '' });

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setUser(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = evt => {
        evt.preventDefault();

        // const isNotUnique = contacts.find(item => item.name === contact.name);

        // if (isNotUnique) {
        //     alert(`${contact.name} name is already in contacts`);
        //     return;
        // };

        // dispatch(contactsOperations.addContact(contact));
        reset();
    };

    const reset = () => {
        setUser({ email: '', password: '' });
    };

    return (
        <Section title='Login'>
            <form className={s.Form} onSubmit={handleSubmit}>
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
                <Button label="Login" type="submit" />
            </form>
        </Section>
    );
};

export default LoginView;
