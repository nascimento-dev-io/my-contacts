import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Overlay, Container, Footer } from './styles';

import Button from '../Button';

const Modal = ({ danger, setIsOpenModal, contact }) => {
  function handleRemoveContact(id) {
    try {
      fetch(`http://localhost:3001/contacts/${id}`, {
        method: 'Delete',
      });
      setIsOpenModal(false);
    } catch (error) {
      console.log(error);
    }
  }
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Tem certeza que deseja remover o contato {contact.name}</h1>
        <p>Esta ação não pode ser desfeita!</p>

        <Footer>
          <button
            type="button"
            className="cancel-button"
            onClick={() => setIsOpenModal(false)}
          >
            Cancelar
          </button>
          <Button
            type="button"
            danger={danger}
            onClick={() => handleRemoveContact(contact.id)}
          >
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};

export default Modal;
