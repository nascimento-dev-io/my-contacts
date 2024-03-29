import styled from 'styled-components';

export default styled.select`
  width: 100%;
  height: 52px;
  background: #fff;
  border-radius: 4px;
  outline: none;

  border: 2px solid transparent;
  padding: 0 16px;
  font-size: 16px;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  appearance: none;
  transition: border-color 0.2s ease-in;

  text-transform: capitalize;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
  }
  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[200]};
    opacity: 1;
  }
`;
