import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;

  display: flex;
  align-items: center;

  .details {
    margin-left: 16px;

    strong {
      display: block;
      color: ${({ theme }) => theme.colors.danger.main};
      margin-bottom: 8px;
      font-size: 22px;
    }
  }
`;
