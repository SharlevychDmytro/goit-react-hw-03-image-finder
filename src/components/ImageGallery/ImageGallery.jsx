import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from 'components/ImageGallery/ImageGallery.styled';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

export class ImageGallery extends Component {
  state = {
    currentItem: '',
    isOpen: false,
  };

  clickItem = e => {
    this.setState({ isOpen: true, currentItem: e.currentTarget.id });
  };

  closeModal = () => {
    this.setState({ isOpen: false, currentItem: '' });
  };
  render() {
    const currentImage = this.props.images.filter(
      image => String(image.id) === this.state.currentItem
    );
    return (
      <>
        <ImageGalleryStyled>
          {this.props.images.map(image => (
            <ImageGalleryItem
              key={image.id}
              url={image.webformatURL}
              alt={image.id}
              onClick={this.clickItem}
            />
          ))}
        </ImageGalleryStyled>
        {this.state.isOpen && (
          <Modal onClose={this.closeModal} data={currentImage} />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
