import { Link } from 'react-router-dom';

// import Modal from '../../components/Modal';

import {
  Container,
  InputSearchContainer,
  HeaderListContacts,
  ListContainer,
  Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import editIcon from '../../assets/images/icons/edit.svg';
import trashIcon from '../../assets/images/icons/trash.svg';

const Home = () => {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
      <HeaderListContacts>
        <strong>3 Contatos</strong>
        <Link to="/new">Novo contato</Link>
      </HeaderListContacts>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
      </ListContainer>
      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Jorge Nascimento</strong>
            <small>Instagram</small>
          </div>
          <span>email@email.com.br</span>
          <span>(41) 99999-9999</span>
        </div>
        <div className="actions">
          <Link to="/edit/123">
            <img src={editIcon} alt="edit contact" />
          </Link>

          <button>
            <img src={trashIcon} alt="delete contact" />
          </button>
        </div>
      </Card>
    </Container>
  );
};

export default Home;
