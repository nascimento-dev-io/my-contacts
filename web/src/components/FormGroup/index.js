import PropTypes from 'prop-types';
import { Container } from './styles';

const FormGroup = ({ children }) => {
  return <Container>{children}</Container>;
};

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormGroup;
