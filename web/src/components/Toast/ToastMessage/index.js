import PropTypes from 'prop-types';
import { Container } from './styles';

import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

const ToastMessage = ({ message, onRemoveMessage }) => {
  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  return (
    <Container type={message.type} onClick={handleRemoveToast}>
      {message.type === 'success' && <img src={checkCircleIcon} alt="check" />}
      {message.type === 'danger' && <img src={xCircleIcon} alt="x" />}
      <strong>{message.text}</strong>
    </Container>
  );
};

ToastMessage.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
    id: PropTypes.number.isRequired,
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
};

export default ToastMessage;
