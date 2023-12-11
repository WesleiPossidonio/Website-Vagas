import styled from 'styled-components'

interface HeaderProps {
  stateHeader: boolean
}

export const Header = styled.header<HeaderProps>`
  width: 100%;
  height: 6rem;

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  position: fixed;
  z-index: 10;

  background: ${({ theme, stateHeader }) =>
    stateHeader ? theme.colors['bg-home'] : 'transparent'};

  font-size: 1.2rem;
  font-weight: 700;

  color: #fff;

  img {
    width: 8rem;
    padding: 1rem;
  }

  @media (max-width: 920px) {
    display: none;
  }
`

export const ContentNav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`

export const LinkNav = styled.li`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.375rem;

  color: #fff;
  list-style-type: none;

  cursor: pointer;

  &:after {
    content: '';
    width: 0px;
    height: 0.125rem;
    margin-top: 0.3125rem;

    display: block;
    background: ${({ theme }) => theme.colors['base-yellow']};
    transition: 400ms;
  }

  &:hover::after {
    width: 100%;
  }
`
