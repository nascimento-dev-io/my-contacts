import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import ContactsServices from '../../services/ContactsServices';

import Modal from '../../components/Modal';
import Loader from '../../components/Loader';

import {
  Container,
  InputSearchContainer,
  Header,
  ListHeader,
  Card,
  ErrorContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import editIcon from '../../assets/images/icons/edit.svg';
import trashIcon from '../../assets/images/icons/trash.svg';
import SadIcon from '../../assets/images/icons/sad.svg';
import Button from '../../components/Button';

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()),
      ),
    [contacts, searchTerm],
  );

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);
      const contactsList = await ContactsServices.listContacts(orderBy);

      setHasError(false);
      setContacts(contactsList);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

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

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function handleTryAgain() {
    loadContacts();
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <InputSearchContainer>
        <input
          value={searchTerm}
          onChange={handleSearchTerm}
          type="text"
          placeholder="Pesquisar contato..."
        />
      </InputSearchContainer>

      <Header error={hasError}>
        {!hasError && (
          <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' contato' : ' contatos'}
          </strong>
        )}

        <Link to="/new">Novo contato</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={SadIcon} alt="sad" />
          <div className="details">
            <strong>Ocorreu um erro ao obter os meus contatos.</strong>
            <Button type="button" onClick={handleTryAgain}>
              Tentar novamente
            </Button>
          </div>
        </ErrorContainer>
      )}

      {!hasError && (
        <>
          {filteredContacts.length > 0 ? (
            <ListHeader orderBy={orderBy}>
              <button type="button" onClick={handleToggleOrderBy}>
                <span>Nome</span>
                <img src={arrow} alt="Arrow" />
              </button>
            </ListHeader>
          ) : null}
          {filteredContacts.map(({ id, name, category_name, email, phone }) => (
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
        </>
      )}
    </Container>
  );
};

export default Home;
