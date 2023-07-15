import PropTypes from 'prop-types';
import Input from '../../../components/Input';
import { Container } from './styles';

export default function InputSearch({ value, onChange }) {
  return (
    <Container>
      <Input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Pesquisar contato..."
      />
    </Container>
  );
}

InputSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
