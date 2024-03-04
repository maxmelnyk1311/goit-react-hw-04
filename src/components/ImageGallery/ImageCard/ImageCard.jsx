import css from './ImageCard.module.css';
export default function ImageCard({imgSource, imgAltText, handleOpenModal, largeImg}) {
    return (
        <div>
            <img 
                onClick={() => handleOpenModal(largeImg)}
                className={css.image}
                src={imgSource} 
                alt={imgAltText} 
            />
        </div>
    )
}