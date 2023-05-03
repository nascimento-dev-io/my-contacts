import styled from 'styled-components';

export const Container = styled.button`
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 24px;
  top: 24px;

  border-radius: 50%;
  outline: none;

  overflow: hidden;

  transition: all 300ms ease;

  img {
    display: block;
    width: 40px;
    height: 40px;

    object-fit: cover;
    transition: all 300ms ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
