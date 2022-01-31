import { useDispatch, useSelector } from 'react-redux';
import { contactsActions, contactsSelectors } from 'redux/contacts';
import s from './Filter.module.scss';

const Filter = () => {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const onChange = e => dispatch(contactsActions.changeFilter(e.target.value));

  return (
    <label className={s.Label}>
      <p>Find contacs by name</p>
      <input
        className={s.Input}
        onChange={onChange}
        value={value}
        type="text"
      />
    </label >);
};

export default Filter;

