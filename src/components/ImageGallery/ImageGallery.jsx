import ImageCard from "./ImageCard/ImageCard";
import css from './ImageGallery.module.css';

export default function ImageGallery({images, handleOpenModal}){
    return (
        <ul className={css.imageGallery}>
            {images.map((image) => {
                return (
                    <li 
                        key={image.id} 
                        className={css.imageCard}
                    >
                        <ImageCard 
                            largeImg={image.urls.regular}
                            handleOpenModal={() => handleOpenModal(image)}
                            imgSource={image.urls.small}
                            imgAltText={image.alt_description}
                        />
                    </li>
                )
            })}
        </ul>
    )
}