import ToastMessage from '../ToastMessage';
import { Container } from './styles';

const ToastContainer = () => {
  return (
    <Container>
      <ToastMessage text="Default text" />
      <ToastMessage text="Error text" type="danger" />
      <ToastMessage text="Success text" type="success" />
    </Container>
  );
};

export default ToastContainer;
