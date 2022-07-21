import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;

  background: #fff;
  border-radius: 4px;

  padding: 24px;

  h1 {
    font-size: 22px;
    color: ${({ danger }) => (danger ? '#FC5050' : '#222222')};
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background: transparent;
    border: none;
    font-size: 16px;

    padding: 0 16px;

    margin-right: 8px;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
