import styled from 'styled-components'

import Image from '../../assets/ImageThere.jpg'

export const ContainerLogin = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors['bg-home']};
`
export const ContentLogin = styled.div`
  width: 65rem;
  height: 40rem;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
`

export const ContainerLogo = styled.div`
  width: 55%;
  height: 100%;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 8px 0 0 8px;

  padding: 1rem;

  img {
    width: 8rem;
  }

  @media (max-width: 940px) {
    display: none;
  }
`

export const ContainerForm = styled.div`
  width: 45%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 1.5rem;
  border-radius: 0 8px 8px 0;

  background-color: ${({ theme }) => theme.colors['bg-secundary']};

  h1 {
    margin-top: 2.5rem;
    color: ${({ theme }) => theme.colors['base-input']};
  }

  p {
    font-size: 0.875rem;
    margin-top: 0.7rem;
    color: ${({ theme }) => theme.colors['base-input']};
  }

  .navigateHome {
    align-self: flex-end;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors['base-yellow']};
    }
  }

  @media (max-width: 940px) {
    width: 90%;
    border-radius: 8px;
  }
`
