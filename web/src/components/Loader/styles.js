import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {  opacity: 0;}
  to {  opacity: 1;}
`;

const fadeOut = keyframes`
  from {  opacity: 1;}
  to {  opacity: 0;}
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  left: 0;
  top: 0;

  background: rgba(246, 245, 252, 0.7);
  animation: ${fadeIn} 0.3s forwards;

  ${({ isLeaving }) =>
    isLeaving &&
    css`
      animation: ${fadeOut} 0.3s forwards;
    `}
`;
