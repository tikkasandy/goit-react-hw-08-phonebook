import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import ContactItem from 'components/ContactItem/ContactItem';
import CustomLoader from 'components/CustomLoader';
import s from './Contacts.module.scss';

const Contacts = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const isLoading = useSelector(contactsSelectors.getLoading);
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <>
      <ul className={s.ContactsList}>
        {contacts.map(({ id, name, phone }) => (
          <li key={id} className={s.ContactsItem}>
            <ContactItem
              id={id}
              name={name}
              phone={phone}
            />
          </li>
        ))}
      </ul>
      {isLoading && <CustomLoader />}
    </>
  );
};

export default Contacts;
