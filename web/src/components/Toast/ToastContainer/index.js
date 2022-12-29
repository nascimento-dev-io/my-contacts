import { useState, useEffect } from 'react';

import { toastEventManager } from '../../../utils/toast';

import ToastMessage from '../ToastMessage';

import { Container } from './styles';

const ToastContainer = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAddToast({ type, text }) {
      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => toastEventManager.removeListener('addtoast', handleAddToast);
  }, []);

  return (
    <Container>
      {messages.map((message) => {
        return (
          <ToastMessage
            key={message.id}
            type={message.type}
            text={message.text}
          />
        );
      })}
    </Container>
  );
};

export default ToastContainer;
