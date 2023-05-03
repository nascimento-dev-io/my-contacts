/* eslint-disable no-unused-expressions */
import styled, { css } from 'styled-components';

export const Container = styled.button`
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;

  position: absolute;
  right: 24px;
  top: 24px;

  border-radius: 50%;
  outline: none;

  overflow: hidden;
`;

export const WrapperIcons = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};

  transition: transform 500ms ease;

  ${({ themeSelected }) =>
    themeSelected === 'dark'
      ? css`
          transform: rotate(180deg);
        `
      : css`
          transform: rotate(0deg);
        `}

  img {
    display: block;
    width: 40px;
    height: 40px;

    transition: transform 300ms ease-in;
    transform: scale(1.1);
  }
`;
