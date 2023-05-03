import PropTypes from 'prop-types';

import dayAndNightLogo from '../../assets/images/day-and-night.png';

import { Container, WrapperIcons } from './styles';

function ToggleThemeButton({ theme, onToggleTheme }) {
  return (
    <Container onClick={onToggleTheme}>
      <WrapperIcons themeSelected={theme}>
        <img src={dayAndNightLogo} alt="light and dark icon" />
      </WrapperIcons>
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
