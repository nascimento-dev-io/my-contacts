import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../../components/Modal';

import {
  Container,
  InputSearchContainer,
  Header,
  ListHeader,
  Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import editIcon from '../../assets/images/icons/edit.svg';
import trashIcon from '../../assets/images/icons/trash.svg';

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(null);
  const [orderBy, setOrderBy] = useState('asc');
  const [isModalOpen, setIsOpenModal] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
      .then(async (response) => {
        const json = await response.json();
        setContacts(json);
      })
      .catch((error) => console.log('erro', error));
  }, [orderBy]);

  async function handleModalDelete(id) {
    try {
      const response = await fetch(`http://localhost:3001/contacts/${id}`);
      const contact = await response.json();
      setCurrentContact(contact);
      setIsOpenModal(true);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>
          {contacts.length}
          {contacts.length === 1 ? ' contato' : ' contatos'}
        </strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListHeader orderBy={orderBy}>
        <button type="button" onClick={handleToggleOrderBy}>
          <span>Nome</span>
          <img src={arrow} alt="Arrow" />
        </button>
      </ListHeader>
      {contacts.map(({ id, name, category_name, email, phone }) => (
        <Card key={id}>
          <div className="info">
            <div className="contact-name">
              <strong>{name}</strong>
              {category_name && <small>{category_name}</small>}
            </div>
            <span>{email}</span>
            <span>{phone}</span>
          </div>
          <div className="actions">
            <Link to={`/edit/${id}`}>
              <img src={editIcon} alt="edit contact" />
            </Link>

            <button onClick={() => handleModalDelete(id)}>
              <img src={trashIcon} alt="delete contact" />
            </button>
          </div>
        </Card>
      ))}
      {isModalOpen && (
        <Modal
          danger
          setIsOpenModal={setIsOpenModal}
          contact={currentContact}
        />
      )}
    </Container>
  );
};

export default Home;
