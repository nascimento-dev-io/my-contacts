import { useEffect } from 'react';

import { toastEventManager } from '../../../utils/toast';

import ToastMessage from '../ToastMessage';

import useAnimatedList from '../../../hooks/useAnimatedList';
import { Container } from './styles';

const ToastContainer = () => {
  const {
    items: messages,
    setItems: setMessages,
    pendingRemoveItemsIds,
    handleRemoveItem,
    handleAnimationEnd,
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
      {messages.map((message) => {
        return (
          <ToastMessage
            key={message.id}
            message={message}
            onRemoveMessage={handleRemoveItem}
            isLeaving={pendingRemoveItemsIds.includes(message.id)}
            onAnimationEnd={handleAnimationEnd}
          />
        );
      })}
    </Container>
  );
};

export default ToastContainer;
