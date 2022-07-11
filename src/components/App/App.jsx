import { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { AppStyled } from 'components/App/App.styled';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { requestToServer } from 'js/request-to-server';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.setState({ isLoading: true });
      const response = await requestToServer(this.state.query, this.state.page);
      this.setState({ isLoading: false });
      const data = response.data.hits;
      this.setState(({ images }) => ({ images: [...images, ...data] }));
    }
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  formSubmit = query => {
    this.setState({ page: 1, query: query, images: [] });
  };

  render() {
    return (
      <AppStyled>
        <Searchbar onSubmit={this.formSubmit} />
        <ImageGallery images={this.state.images} />
        {this.state.isLoading && <Loader />}
        {this.state.images.length !== 0 && <Button onClick={this.loadMore} />}
      </AppStyled>
    );
  }
}
