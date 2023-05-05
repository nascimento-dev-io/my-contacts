import { useRef } from 'react';
import ContactsServices from '../../services/ContactsServices';

import toast from '../../utils/toast';

export default function useNewContact() {
  const contactFormRef = useRef(null);

  async function handleSubmit(contact) {
    try {
      await ContactsServices.createContact(contact);
      contactFormRef.current.resetFields();

      toast({
        type: 'success',
        text: 'Cadastro realizado com sucesso',
      });
    } catch {
      // const event = new CustomEvent('addtoast', {
      //   detail: {
      //     type: 'danger',
      //     text: 'Ocorreu um erro ao cadastrar o contato',
      //   },
      // });
      // document.dispatchEvent(event);
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o contato',
      });
    }
  }

  return { contactFormRef, handleSubmit };
}
