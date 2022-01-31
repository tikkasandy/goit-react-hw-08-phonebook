import { useSelector } from 'react-redux';
import { contactsSelectors } from "redux/contacts";
import PropTypes from 'prop-types';
import s from './Button.module.scss';

const Button = ({ label, type, onClick }) => {
  const isLoading = useSelector(contactsSelectors.getLoading);

  return (
    <button className={s.Button} type={type} onClick={onClick} disabled={isLoading}>
      {label}
    </button>
  )
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
