import React from 'react';

import { Container, HeaderList, ListContainer, Card } from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import editIcon from '../../assets/images/icons/edit.svg';
import trashIcon from '../../assets/images/icons/trash.svg';

function ContactsList() {
  return (
    <Container>
      <HeaderList>
        <strong>3 Contatos</strong>
        <a href="">Novo contato</a>
      </HeaderList>

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
          <a href="#">
            <img src={editIcon} alt="edit contact" />
          </a>

          <button>
            <img src={trashIcon} alt="delete contact" />
          </button>
        </div>
      </Card>

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
          <a href="#">
            <img src={editIcon} alt="edit contact" />
          </a>

          <button>
            <img src={trashIcon} alt="delete contact" />
          </button>
        </div>
      </Card>

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
          <a href="#">
            <img src={editIcon} alt="edit contact" />
          </a>

          <button>
            <img src={trashIcon} alt="delete contact" />
          </button>
        </div>
      </Card>
    </Container>
  );
}

export default ContactsList;
