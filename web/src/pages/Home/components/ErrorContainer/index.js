import PropTypes from 'prop-types';
import SadIcon from '../../../../assets/images/icons/sad.svg';
import Button from '../../../../components/Button';

import { Container } from './styles';

function ErrorStatus({ onTryAgain }) {
  return (
    <Container>
      <img src={SadIcon} alt="sad" />
      <div className="details">
        <strong>Ocorreu um erro ao obter os meus contatos.</strong>
        <Button type="button" onClick={onTryAgain}>
          Tentar novamente
        </Button>
      </div>
    </Container>
  );
}

ErrorStatus.propTypes = {
  onTryAgain: PropTypes.func.isRequired,
};

export default ErrorStatus;
