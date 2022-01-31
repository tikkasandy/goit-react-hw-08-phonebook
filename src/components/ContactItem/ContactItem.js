import { useDispatch } from 'react-redux';
import { contactsOperations } from "redux/contacts";
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import s from './ContactItem.module.scss';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(contactsOperations.deleteContact(id));

  return (
    <>
      <p className={s.Contact}>
        {name}: {phone}
      </p>
      <Button label="Delete" type="button" onClick={onDeleteContact} />
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;
