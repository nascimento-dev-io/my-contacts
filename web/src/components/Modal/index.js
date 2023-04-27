import PropTypes from 'prop-types';

import { Overlay, Container, Footer } from './styles';

import Button from '../Button';
import ReactPortal from '../ReactPortal';

const Modal = ({
  danger,
  visible,
  isLoading,
  title,
  children,
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
}) => {
  if (!visible) {
    return null;
  }

  return (
    <ReactPortal containerId={'modal-root'}>
      <Overlay>
        <Container danger={danger}>
          <h1>{title}</h1>
          <div className="modal-body">{children}</div>

          <Footer>
            <button
              type="button"
              className="cancel-button"
              onClick={onCancel}
              disabled={isLoading}
            >
              {cancelLabel}
            </button>
            <Button
              type="button"
              danger={danger}
              isLoading={isLoading}
              onClick={onConfirm}
            >
              {confirmLabel}
            </Button>
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
};

Modal.propTypes = {
  danger: PropTypes.bool,
  visible: PropTypes.bool,
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  danger: false,
  isLoading: false,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
};

export default Modal;
