import { useEffect, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsServices from '../../services/ContactsServices';
import Loader from '../../components/Loader';
import toast from '../../utils/toast';
import useSafeAsyncState from '../../hooks/useSafeAsyncState';
import useIsMounted from '../../hooks/useIsMounted';
import useSafeAsyncAction from '../../hooks/useSafeAsyncAction';

const EditContact = () => {
  const [contactName, setContactName] = useSafeAsyncState(null);
  const [isLoading, setIsLoading] = useSafeAsyncState(true);
  const contactFormRef = useRef(null);

  const safeAsyncAction = useSafeAsyncAction();

  const isMounted = useIsMounted();

  const { id } = useParams();
  const history = useHistory();

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
          history.push('/');
          toast({ type: 'danger', text: 'Contato não encontrado' });
        }
      }
    }

    loadContact();
  }, [id, history, isMounted, setContactName, setIsLoading]);

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
    <>
      <Loader isLoading={isLoading} />
      <PageHeader
        title={isLoading ? 'Carregando...' : `Editar ${contactName}`}
      />
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default EditContact;
