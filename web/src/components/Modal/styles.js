import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
from {  opacity: 0;}
to {  opacity: 1;}
`;

const fadeOut = keyframes`
from {  opacity: 1;}
to {  opacity: 0;}
`;

const scaleIn = keyframes`
from { scale: 0;}
to { scale: 1; }
`;

const scaleOut = keyframes`
from { scale: 1;}
to { scale: 0; }
`;

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);

  animation: ${fadeIn} 0.3s;

  ${({ isLeaving }) =>
    isLeaving &&
    css`
      animation: ${fadeOut} 0.3s forwards;
    `}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;

  background: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 4px;

  padding: 24px;
  animation: ${scaleIn} 0.3s;

  ${({ isLeaving }) =>
    isLeaving &&
    css`
      animation: ${scaleOut} 0.3s forwards;
    `};

  > h1 {
    font-size: 22px;
    color: ${({ danger }) => (danger ? '#FC5050' : '#222222')};
  }

  .modal-body {
    margin-top: 32px;
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

    margin-right: 24px;
    color: ${({ theme }) => theme.colors.gray[200]};

    &:disabled {
      cursor: not-allowed;
    }
  }
`;
