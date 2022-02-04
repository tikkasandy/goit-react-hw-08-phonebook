import { useDispatch } from 'react-redux';
import { contactsOperations } from "redux/contacts";
import { MdOutlineDelete, MdOutlineModeEdit, MdOutlineLocalPhone } from 'react-icons/md';
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
        <div className={s.C}>
          <a href={`tel:${number}`} className={s.Call}>
            <MdOutlineLocalPhone className={s.CallSvg} />

          </a>
          <span className={s.Number}>{number}</span>
        </div>
      </div>
      <div>
        <button className={s.Button} type="button" onClick={onDeleteContact}>
          <MdOutlineModeEdit className={s.ButtonSvg} />
        </button>
        <button className={s.Button} type="button" onClick={onDeleteContact}>
          <MdOutlineDelete className={s.ButtonSvg} />
        </button>
      </div>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
