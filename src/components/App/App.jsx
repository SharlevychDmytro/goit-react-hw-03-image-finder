import { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { AppStyled } from 'components/App/App.styled';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { requestToServer } from 'js/request-to-server';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    isLoading: false,
    currentItem: '',
    isOpen: false,
    loadMore: false,
  };

  async componentDidUpdate(_, prevState) {
    const { page, query } = this.state;
    if (query.trim() === '') {
      return;
    }
    if (prevState.page !== page || prevState.query !== query) {
      this.setState({ isLoading: true });
      const response = await requestToServer(query, page);
      this.setState({ isLoading: false });
      const data = response.data.hits;

      if (data.length) {
        this.setState({ loadMore: true });
      } else {
        this.setState({ loadMore: false });
      }

      if (Math.ceil(response.data.totalHits / 12) === Number(page)) {
        this.setState({ loadMore: false });
      }

      if (!data.length) {
        alert(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
      this.setState(({ images }) => ({ images: [...images, ...data] }));
    }
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  formSubmit = query => {
    this.setState({ page: 1, query: query, images: [] });
  };

  clickItem = e => {
    this.setState({ isOpen: true, currentItem: e.currentTarget.id });
  };

  closeModal = () => {
    this.setState({ isOpen: false, currentItem: '' });
  };

  render() {
    const { isLoading, images, isOpen, loadMore } = this.state;
    const currentImage = images.filter(
      image => String(image.id) === this.state.currentItem
    );

    return (
      <AppStyled>
        <Searchbar onSubmit={this.formSubmit} />
        <ImageGallery images={images} onClick={this.clickItem} />
        {isLoading && <Loader />}
        {loadMore && <Button onClick={this.loadMore} />}
        {isOpen && <Modal onClose={this.closeModal} data={currentImage} />}
      </AppStyled>
    );
  }
}
