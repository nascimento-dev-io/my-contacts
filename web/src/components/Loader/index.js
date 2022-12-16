import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay } from './styles';
import Spinner from '../Spinner';

const Loader = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Spinner size={90} />
    </Overlay>,
    document.getElementById('loader-root'),
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loader;
