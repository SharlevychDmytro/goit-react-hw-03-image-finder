import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from 'components/ImageGallery/ImageGallery.styled';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <ImageGalleryStyled>
      {images.map(({ id, webformatURL }) => (
        <ImageGalleryItem
          key={id}
          url={webformatURL}
          alt={id}
          onClick={onClick}
        />
      ))}
    </ImageGalleryStyled>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func,
};
