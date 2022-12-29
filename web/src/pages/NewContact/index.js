import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsServices from '../../services/ContactsServices';
import toast from '../../utils/toast';

const NewContact = () => {
  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };
      await ContactsServices.createContact(contact);
      toast({
        type: 'success',
        text: 'Cadastro realizado com sucesso',
      });
      // toast({ type: 'success', text: 'Cadastro realizado com sucesso' });
    } catch {
      // const event = new CustomEvent('addtoast', {
      //   detail: {
      //     type: 'danger',
      //     text: 'Ocorreu um erro ao cadastrar o contato',
      //   },
      // });
      // document.dispatchEvent(event);
      // toast({ type: 'danger', text: 'Ocorreu um erro ao cadastrar o contato' });
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o contato',
      });
    }
  }
  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </>
  );
};
export default NewContact;
