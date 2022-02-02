import { useDispatch } from 'react-redux';
import { contactsOperations } from "redux/contacts";
import { MdOutlineDelete } from 'react-icons/md';
import PropTypes from 'prop-types';
import s from './ContactItem.module.scss';


const ContactItem = ({ id, name, number }) => {

  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(contactsOperations.deleteContact(id));

  return (
    <>
      <div className={s.Contact}>
        <span className={s.Name}>
          {name}
        </span>
        <a href={`tel:${number}`} className={s.Number} >{number}</a>
      </div>
      <button className={s.Button} type="button" onClick={onDeleteContact}>
        <MdOutlineDelete className={s.ButtonSvg} />
      </button>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
