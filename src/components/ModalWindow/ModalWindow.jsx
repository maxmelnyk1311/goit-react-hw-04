import ReactModal from 'react-modal';
import css from './ModalWindow.module.css';

export default function ModalWindow({isOpen, largeImgSource, handleModalClose}) {
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
                src={largeImgSource}
            />
        </ReactModal>
    )
}