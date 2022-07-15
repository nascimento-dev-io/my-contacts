import ContactsList from '../../components/ContactsList';
import { InputSearchContainer } from '../../components/Header/styles';

const Home = () => {
  return (
    <>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
      <ContactsList />
    </>
  );
};

export default Home;
