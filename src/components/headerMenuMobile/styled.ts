import styled from 'styled-components'

interface ContainerMenuMobileProps {
  stateHeader: boolean
}

export const ContainerMenuMobile = styled.header<ContainerMenuMobileProps>`
  width: 100%;
  height: 4rem;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

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
    margin-top: 1rem;
  }

  @media (min-width: 921px) {
    display: none;
  }
`

export const ContainerMenus = styled.div`
  width: 100%;
  height: 100vh;

  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  overflow: hidden;

  z-index: 999;

  background: ${({ theme }) => theme.colors['bg-home']};

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transition: 0.7s;
    color: ${({ theme }) => theme.colors['base-white']};
  }
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
