import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineClear } from 'react-icons/md';
import { contactsActions, contactsSelectors } from 'redux/contacts';
import s from './Filter.module.scss';

const Filter = () => {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const onChange = e => dispatch(contactsActions.changeFilter(e.target.value));
  const resetFilter = () => dispatch(contactsActions.changeFilter(""));

  return (
    <label className={s.Label}>
      <input
        className={s.Input}
        onChange={onChange}
        value={value}
        type="text"
        name="filter"
        placeholder=" "
        aria-label='Find contacs by name'
      />
      <span className={s.Placeholder}>Find contacs by name</span>
      <button
        className={s.ShowButton}
        onClick={resetFilter}
        type="button"
        title={"Clear filter"}
        arial-label={"Clear filter"}>
        <MdOutlineClear className={s.ShowSvg} />
      </button>
    </label >);
};

export default Filter;

