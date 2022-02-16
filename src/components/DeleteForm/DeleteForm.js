import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { contactsSelectors } from 'redux/contacts';
import CustomLoader from 'components/CustomLoader';
import s from './DeleteForm.module.scss';

const DeleteForm = ({ name, onDelete, onClose }) => {
    const isLoading = useSelector(contactsSelectors.getLoading);

    return (
        <>
            <div className={s.Form}>
                <h2 className={s.Title}>Delete contact</h2>
                <p className={s.Message}>Are you sure you want to delete contact {<span className={s.Name}>{name}</span>}?</p>
                <div className={s.Buttons}>
                    <button
                        className={s.CancelButton}
                        onClick={onClose}
                        type="button"
                        title={"Do not delete contact"}
                        arial-label={"Do not delete contact"}>
                        No, thanks
                    </button>
                    <button
                        className={s.AgreeButton}
                        onClick={onDelete}
                        type="button"
                        title={"Delete contact"}
                        arial-label={"Delete contact"}
                        disabled={isLoading}
                    >
                        Delete
                    </button>
                </div>
            </div>
            {isLoading && <CustomLoader />}
        </>
    );
};

DeleteForm.propTypes = {
    name: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default DeleteForm;
