import { useEffect } from 'react';

import { toastEventManager } from '../../../utils/toast';

import ToastMessage from '../ToastMessage';

import useAnimatedList from '../../../hooks/useAnimatedList';
import { Container } from './styles';

const ToastContainer = () => {
  const {
    setItems: setMessages,
    renderList,
    handleRemoveItem,
  } = useAnimatedList();

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text, duration },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => toastEventManager.removeListener('addtoast', handleAddToast);
  }, [setMessages]);

  return (
    <Container>
      {renderList((message, { isLeaving, animatedRef }) => {
        return (
          <ToastMessage
            key={message.id}
            message={message}
            onRemoveMessage={handleRemoveItem}
            isLeaving={isLeaving}
            animatedRef={animatedRef}
          />
        );
      })}
    </Container>
  );
};

export default ToastContainer;
