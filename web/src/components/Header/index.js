import PropTypes from 'prop-types';
import { Container } from './styles';

import logoMyContactLight from '../../assets/images/logo-light.svg';
import logoMyContactDark from '../../assets/images/logo-dark.svg';

function Header({ theme }) {
  return (
    <Container>
      {theme === 'light' ? (
        <img src={logoMyContactLight} alt="logo my contacts" />
      ) : (
        <img src={logoMyContactDark} alt="logo my contacts" />
      )}
    </Container>
  );
}

Header.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
};

export default Header;
