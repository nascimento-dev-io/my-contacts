import PropTypes from 'prop-types';

import { StyledButton } from './styles';
import Spinner from '../Spinner';

const Button = ({ type, disabled, isLoading, danger, children, onClick }) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled || isLoading}
      danger={danger}
      onClick={onClick}
    >
      {isLoading ? <Spinner size={16} /> : children}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  danger: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  isLoading: false,
  danger: false,
  onClick: undefined,
};

export default Button;
