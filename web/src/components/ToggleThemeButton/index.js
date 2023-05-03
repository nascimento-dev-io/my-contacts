import PropTypes from 'prop-types';

import darkThemeLogo from '../../assets/images/dark-theme-icon.svg';
import lightThemeLogo from '../../assets/images/light-theme-icon.svg';
import { Container } from './styles';

function ToggleThemeButton({ theme, onToggleTheme }) {
  return (
    <Container onClick={onToggleTheme}>
      {theme === 'dark' ? (
        <img src={darkThemeLogo} alt="dark theme icon" />
      ) : (
        <img src={lightThemeLogo} alt="light theme icon" />
      )}
    </Container>
  );
}

ToggleThemeButton.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']),
  onToggleTheme: PropTypes.func,
};

ToggleThemeButton.defaultProps = {
  theme: 'dark',
};

export default ToggleThemeButton;
