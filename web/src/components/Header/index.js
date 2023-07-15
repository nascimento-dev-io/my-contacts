import PropTypes from 'prop-types';
import { Container } from './styles';

import logoMyContactDark from '../../assets/images/logo-dark.svg';
import logoMyContactLight from '../../assets/images/logo-light.svg';
import ToggleThemeButton from '../ToggleThemeButton';

function Header({ theme, onHandleToggleTheme }) {
  return (
    <Container>
      <ToggleThemeButton theme={theme} onToggleTheme={onHandleToggleTheme} />

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
  onHandleToggleTheme: PropTypes.func.isRequired,
};

export default Header;
