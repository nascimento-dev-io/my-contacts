import styled, { css } from 'styled-components';

const containerVariants = {
  success: css`
    background-color: ${({ theme }) => theme.colors.success.main};
  `,
  danger: css`
    background-color: ${({ theme }) => theme.colors.danger.main};
  `,
  default: css`
    background-color: ${({ theme }) => theme.colors.primary.main};
  `,
};

export const Container = styled.div`
  padding: 16px 32px;
  color: #fff;
  ${({ type }) => containerVariants[type] || containerVariants.default}
  border-radius: 4px;
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;

  & + & {
    margin-top: 12px;
  }

  img {
    margin-right: 8px;
  }
`;
