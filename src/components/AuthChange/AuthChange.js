import { Link } from 'react-router-dom';
import Section from 'components/Section';
import s from './AuthChange.module.scss';

const AuthChange = ({ name, to, button }) => (
    <Section>
        <h3 className={s.Text}>{name}</h3>
        <Link to={to} className={s.Link} >
            {button}
        </Link>
    </Section >
);

export default AuthChange;