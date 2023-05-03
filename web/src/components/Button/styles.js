import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  /* width: 100%; */
  height: 56px;
  border: none;

  padding: 0 16px;

  background: ${({ theme }) => theme.colors.primary.main};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  font-weight: bold;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease-in;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    background: #ccc !important;
    cursor: default !important;
  }

  ${({ theme, danger }) =>
    danger &&
    css`
      background: ${theme.colors.danger.main};

      &:hover {
        background: ${theme.colors.danger.light};
      }

      &:active {
        background: ${theme.colors.danger.dark};
      }
    `}
`;
