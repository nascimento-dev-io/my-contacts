import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import arrowIcon from '../../assets/images/icons/arrow.svg';

const PageHeader = ({ title }) => {
  return (
    <Container>
      <Link to="/">
        <img src={arrowIcon} alt="Back" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
