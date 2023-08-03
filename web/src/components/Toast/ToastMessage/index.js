import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { Container } from './styles';

import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';
import xCircleIcon from '../../../assets/images/icons/x-circle.svg';

const ToastMessage = ({
  message,
  onRemoveMessage,
  isLeaving,
  onAnimationEnd,
}) => {
  const refElementAnimated = useRef();

  useEffect(() => {
    function handleAnimationEnd() {
      onAnimationEnd(message.id);
    }

    const refElement = refElementAnimated.current;
    if (isLeaving) {
      refElement.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      refElement.removeEventListener('animationend', handleAnimationEnd);
    };
  }, [isLeaving, onAnimationEnd, message.id]);
  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  useEffect(() => {
    const timeoutID = setTimeout(
      () => onRemoveMessage(message.id),
      message.duration || 7000,
    );

    return () => clearTimeout(timeoutID);
  }, [onRemoveMessage, message]);

  return (
    <Container
      ref={refElementAnimated}
      type={message.type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
      isLeaving={isLeaving}
    >
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
    duration: PropTypes.number,
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
  isLeaving: PropTypes.bool.isRequired,
  onAnimationEnd: PropTypes.func.isRequired,
};

export default ToastMessage;
