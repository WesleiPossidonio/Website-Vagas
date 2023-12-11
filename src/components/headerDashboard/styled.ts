import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 3.8rem;

  padding: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors['bg-home']};
  color: #fff;

  > svg {
    cursor: pointer;
  }
`
