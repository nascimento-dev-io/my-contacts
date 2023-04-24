import { useState, useEffect } from 'react';

import { toastEventManager } from '../../../utils/toast';

import ToastMessage from '../ToastMessage';

import { Container } from './styles';

const ToastContainer = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text, duration },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => toastEventManager.removeListener('addtoast', handleAddToast);
  }, []);

  function handleRemoveMessage(id) {
    setMessages((prevState) =>
      prevState.filter((message) => message.id !== id),
    );
  }

  return (
    <Container>
      {messages.map((message) => {
        return (
          <ToastMessage
            key={message.id}
            message={message}
            onRemoveMessage={handleRemoveMessage}
          />
        );
      })}
    </Container>
  );
};

export default ToastContainer;
