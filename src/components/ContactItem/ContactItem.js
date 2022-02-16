import { useDispatch } from 'react-redux';
import { contactsOperations } from "redux/contacts";
import { MdOutlineDelete, MdOutlineModeEdit, MdOutlineLocalPhone } from 'react-icons/md';
import Modal from '../Modal';
import DeleteForm from 'components/DeleteForm';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.scss';


const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(contactsOperations.deleteContact(id));

  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   showModal && (document.body.style.overflow = 'hidden');
  //   !showModal && (document.body.style.overflow = 'unset');
  // }, [showModal]);

  const handleClick = () => {
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className={s.Contact}>
        <span className={s.Name}>
          {name}
        </span>
        <div className={s.Call}>
          <a href={`tel:${number}`} className={s.CallNumber}>
            <MdOutlineLocalPhone className={s.CallSvg} />

          </a>
          <span className={s.Number}>{number}</span>
        </div>
      </div>
      <div>
        {/* <button
          className={s.Button}
          onClick={onChangeContact}
          type="button"
          title={"Change contact"}
          arial-label={"Change contact"}
        >
          <MdOutlineModeEdit className={s.ButtonSvg} />
        </button> */}
        <button
          className={s.Button}
          onClick={handleClick}
          type="button"
          title={"Delete contact"}
          arial-label={"Delete contact"}>
          <MdOutlineDelete className={s.ButtonSvg} />
        </button>
      </div>
      {showModal &&
        <Modal onClose={toggleModal}>
          <DeleteForm name={name} onDelete={onDeleteContact} onClose={toggleModal} />
        </Modal>}
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
