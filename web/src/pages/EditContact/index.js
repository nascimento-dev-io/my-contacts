import { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsServices from '../../services/ContactsServices';
import Loader from '../../components/Loader';
import toast from '../../utils/toast';

const EditContact = () => {
  const [contact, setContact] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const contactFormRef = useRef(null);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function loadContact() {
      try {
        const contactData = await ContactsServices.getContactById(id);
        contactFormRef.current.setFieldsValues(contactData);

        setContact(contactData);
        setIsLoading(false);
      } catch {
        history.push('/');
        toast({ type: 'danger', text: 'Contato não encontrado' });
      }
    }

    loadContact();
  }, [id, history]);

  function handleSubmit() {}

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader title={`Editar ${contact?.name || ''}`} />
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default EditContact;
