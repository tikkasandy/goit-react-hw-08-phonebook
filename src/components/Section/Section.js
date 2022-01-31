import PropTypes from 'prop-types';
import s from './Section.module.scss';

const Section = ({ title, children }) => (
  <section className={s.Section}>
    <h2 className={s.Title}>{title}</h2>
    {children}
  </section>
);


Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
