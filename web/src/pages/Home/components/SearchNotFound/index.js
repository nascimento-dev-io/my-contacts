import PropTypes from 'prop-types';
import magnifierQuestion from '../../../../assets/images/magnifier-question.svg';
import { Container } from './styles';

function SearchNotFound({ searchTerm }) {
  return (
    <Container>
      <img src={magnifierQuestion} alt="magnifier Question" />

      <p>
        Nenhum resultado foi encontrado para <strong>{searchTerm}</strong>.
      </p>
    </Container>
  );
}

SearchNotFound.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export default SearchNotFound;
