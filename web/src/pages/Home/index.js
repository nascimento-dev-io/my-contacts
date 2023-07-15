/* eslint-disable no-nested-ternary */
/* eslint-disable-next-line no-nested-ternary */
import { Link } from 'react-router-dom';

import Loader from '../../components/Loader';
import Modal from '../../components/Modal';

import Header from './components/Header';

import {
  Card,
  Container,
  EmptyListContainer,
  ErrorContainer,
  ListHeader,
  SearchNotFoundContainer,
} from './styles';

import Button from '../../components/Button';

import emptyBox from '../../assets/images/empty-box.svg';
import arrow from '../../assets/images/icons/arrow.svg';
import editIcon from '../../assets/images/icons/edit.svg';
import SadIcon from '../../assets/images/icons/sad.svg';
import trashIcon from '../../assets/images/icons/trash.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg';

import InputSearch from './components/InputSearch';
import useHome from './useHome';

function Home() {
  const {
    isLoading,
    isDeleteModalVisible,
    isLoadingDelete,
    contactBeingDelete,
    handleCloseDeleteModal,
    handleConfirmeDeleteContact,
    contacts,
    searchTerm,
    handleSearchTerm,
    hasError,
    filteredContacts,
    handleTryAgain,
    orderBy,
    handleToggleOrderBy,
    handleDeleteContact,
  } = useHome();

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {contacts.length > 0 && (
        <InputSearch onChange={handleSearchTerm} value={searchTerm} />
      )}

      <Header
        hasError={hasError}
        qtyOfContacts={contacts.length}
        qtyOfFilteredContacts={filteredContacts.length}
      />

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
          {contacts.length < 1 && !isLoading && (
            <EmptyListContainer>
              <img src={emptyBox} alt="empty box" />

              <p>
                Você ainda não tem nenhum contato cadastrado! Clique no botão
                <strong> ”Novo contato” </strong> à cima para cadastrar o seu
                primeiro!
              </p>
            </EmptyListContainer>
          )}

          {contacts.length > 0 && filteredContacts.length < 1 && (
            <SearchNotFoundContainer>
              <img src={magnifierQuestion} alt="magnifier Question" />

              <p>
                Nenhum resultado foi encontrado para{' '}
                <strong>{searchTerm}</strong> .
              </p>
            </SearchNotFoundContainer>
          )}

          {filteredContacts.length > 0 && (
            <ListHeader orderBy={orderBy}>
              <button type="button" onClick={handleToggleOrderBy}>
                <span>Nome</span>
                <img src={arrow} alt="Arrow" />
              </button>
            </ListHeader>
          )}

          {filteredContacts.map((contact) => (
            <Card key={contact.id}>
              <div className="info">
                <div className="contact-name">
                  <strong>{contact.name}</strong>
                  {contact.category.name && (
                    <small>{contact.category.name}</small>
                  )}
                </div>
                <span>{contact.email}</span>
                <span>{contact.phone}</span>
              </div>
              <div className="actions">
                <Link to={`/edit/${contact.id}`}>
                  <img src={editIcon} alt="edit contact" />
                </Link>

                <button onClick={() => handleDeleteContact(contact)}>
                  <img src={trashIcon} alt="delete contact" />
                </button>
              </div>
            </Card>
          ))}

          <Modal
            danger
            visible={isDeleteModalVisible}
            isLoading={isLoadingDelete}
            title={`Tem certeza que deseja remover o contato ${contactBeingDelete?.name}`}
            confirmLabel="Deletar"
            onCancel={handleCloseDeleteModal}
            onConfirm={handleConfirmeDeleteContact}
          >
            <p>Esta ação não pode ser desfeita!</p>
          </Modal>
        </>
      )}
    </Container>
  );
}

export default Home;
