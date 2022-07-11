import PropTypes from 'prop-types';
import { ButtonStyled } from 'components/Button/Button.styled';
export const Button = ({ onClick }) => {
  return (
    <ButtonStyled type="button" onClick={onClick}>
      Load More
    </ButtonStyled>
  );
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
