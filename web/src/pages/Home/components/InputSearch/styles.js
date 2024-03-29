import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;

  input {
    width: 100%;
    height: 50px;

    background-color: #fff;

    padding: 0 16px;

    outline: 0;

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    &::placeholder {
      color: #bcbcbc;
    }
  }
`;
