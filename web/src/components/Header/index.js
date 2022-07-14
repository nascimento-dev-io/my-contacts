import { Container, InputSearchContainer } from './styles';

import logoMyContact from '../../assets/images/logo.svg';

function Header() {
  return (
    <Container>
      <img src={logoMyContact} alt="logo mycontacts" />
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
    </Container>
  );
}

export default Header;
