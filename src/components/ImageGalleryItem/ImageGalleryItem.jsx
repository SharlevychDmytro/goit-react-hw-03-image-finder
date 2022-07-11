import PropTypes from 'prop-types';
import {
  ImageGalleryItemStyled,
  ImageGalleryItemImage,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export const ImageGalleryItem = ({ url, alt, onClick }) => {
  return (
    <ImageGalleryItemStyled id={alt} onClick={onClick}>
      <ImageGalleryItemImage src={url} alt={alt} />
    </ImageGalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};
