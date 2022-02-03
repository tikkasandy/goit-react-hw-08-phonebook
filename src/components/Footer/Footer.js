import Container from 'components/Container';
import s from './Footer.module.scss';

const Footer = () => (
    <footer className={s.Footer}>
        <Container>
            <p className={s.Text}> {'© 2022 Developed by '}
                <a
                    className={s.Link}
                    href="https://github.com/tikkasandy"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github profile"
                    aria-label="Link to Github profile"
                >
                    tikkasandy
                </a>
            </p>
            <p className={s.Text}>  {'Inspired by '}   <a
                className={s.Link}
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                aria-label="Link to Facebook"
            >
                Facebook
            </a>
            </p>
        </Container>
    </footer>
);

export default Footer;