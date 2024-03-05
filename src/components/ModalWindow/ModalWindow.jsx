import ReactModal from 'react-modal';
import css from './ModalWindow.module.css';

export default function ModalWindow({isOpen, imgItems, handleModalClose}) {
    return (
        <ReactModal
            isOpen={isOpen}
            className={css.modalWindowWrp}
            overlayClassName={css.modalOverlay}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            onRequestClose={handleModalClose}
            ariaHideApp={false}
        >
            <img
                className={css.modalWindow}
                src={imgItems.urls.regular}
                alt={imgItems.alt_description}
            />
        </ReactModal>
    )
}