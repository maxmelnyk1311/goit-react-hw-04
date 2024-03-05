import css from './ImageCard.module.css';
export default function ImageCard({imgSource, imgAltText, handleOpenModal, imgItems}) {
    return (
        <div>
            <img 
                onClick={() => handleOpenModal(imgItems)}
                className={css.image}
                src={imgSource} 
                alt={imgAltText} 
            />
        </div>
    )
}