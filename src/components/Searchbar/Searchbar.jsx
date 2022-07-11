import { BsSearch } from 'react-icons/bs';
import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SearchbarStyled,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
export class Searchbar extends Component {
  formSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(e.currentTarget.elements.query.value);
    e.target.reset();
  };
  render() {
    return (
      <SearchbarStyled as="header">
        <SearchForm onSubmit={this.formSubmit}>
          <SearchFormButton type="submit">
            <span>
              <BsSearch />
            </span>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarStyled>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
