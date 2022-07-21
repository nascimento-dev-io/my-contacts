import ReactDOM from 'react-dom';
import { Overlay } from './styles';

const Loader = () => {
  return ReactDOM.createPortal(
    <Overlay>
      <div className="loader" />
    </Overlay>,
    document.getElementById('loader-root'),
  );
};

export default Loader;
