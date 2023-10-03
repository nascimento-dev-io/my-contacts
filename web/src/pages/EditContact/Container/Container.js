import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useIsMounted from '../../../hooks/useIsMounted';
import useSafeAsyncAction from '../../../hooks/useSafeAsyncAction';
import useSafeAsyncState from '../../../hooks/useSafeAsyncState';
import ContactsServices from '../../../services/ContactsServices';
import toast from '../../../utils/toast';
import Presentation from '../Presentation/Presentation';

// pattern utilizando a fim de aprendizado do conceito
function Container() {
  const [contactName, setContactName] = useSafeAsyncState('');
  const [isLoading, setIsLoading] = useSafeAsyncState(true);
  const contactFormRef = useRef(null);

  const safeAsyncAction = useSafeAsyncAction();

  const isMounted = useIsMounted();

  const { id } = useParams();
  // const history = useHistory();

  useEffect(() => {
    async function loadContact() {
      try {
        const contactData = await ContactsServices.getContactById(id);

        if (isMounted()) {
          contactFormRef.current.setFieldsValues(contactData);
          setContactName(contactData.name);
          setIsLoading(false);
        }
      } catch {
        if (isMounted()) {
          // history.push('/');
          toast({ type: 'danger', text: 'Contato não encontrado' });
        }
      }
    }

    loadContact();
  }, [id, isMounted, setContactName, setIsLoading]);

  async function handleSubmit(contact) {
    try {
      const contactUpdated = await ContactsServices.updateContact(id, contact);

      safeAsyncAction(() => {
        setContactName(contactUpdated.name);

        toast({
          type: 'success',
          text: 'Cadastro editado com sucesso',
        });
      });
    } catch {
      safeAsyncAction(() => {
        toast({
          type: 'danger',
          text: 'Ocorreu um erro ao editar o contato',
        });
      });
    }
  }

  return (
    <Presentation
      isLoading={isLoading}
      contactName={contactName}
      onSubmit={handleSubmit}
      contactFormRef={contactFormRef}
    />
  );
}

export default Container;
