import { Route, Routes } from 'react-router-dom';

import EditContact from './pages/EditContact';
import Home from './pages/Home';
import NewContact from './pages/NewContact';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </Routes>
  );
};

export default Router;
