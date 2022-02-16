import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { MdOutlineClear } from 'react-icons/md';
import s from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.Backdrop} onClick={handleBackdropClick}>
      <div className={s.Modal}>
        <div className={s.Warper}>
          <button
            className={s.Button}
            onClick={onClose}
            type="button"
            title={"Close"}
            arial-label={"Close"}>
            <MdOutlineClear className={s.Svg} />
          </button>
          {children}
        </div>
      </div>
    </div>,
    modalRoot,

  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
