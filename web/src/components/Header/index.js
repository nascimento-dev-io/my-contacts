import { Container } from './styles';

import logoMyContact from '../../assets/images/logo.svg';

function Header() {
  return (
    <Container>
      <img src={logoMyContact} alt="logo my contacts" />
    </Container>
  );
}

export default Header;
