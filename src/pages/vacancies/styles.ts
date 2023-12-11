import styled from 'styled-components'

export const ContainerVacancies = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-color: ${({ theme }) => theme.colors['bg-home']};
`

export const HeaderVacancies = styled.header`
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  position: fixed;
  z-index: 99;

  padding: 2rem 1rem;

  background-color: ${({ theme }) => theme.colors['bg-home']};

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    p {
      cursor: pointer;
    }
  }
`

export const ImageLogo = styled.img`
  width: 4.5rem;
`

export const ButtonLink = styled.a`
  width: 15rem;
  height: 3rem;

  align-self: center;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 6rem;
  border-radius: 8px;

  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;

  color: ${({ theme }) => theme.colors['bg-home']};

  cursor: pointer;

  background-color: ${({ theme }) => theme.colors['base-yellow']};
`

export const ContainerAboutVacancies = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const ImgBanner = styled.img`
  width: 100%;
  height: max-content;
  margin-top: 4rem;

  @media (max-width: 500) {
    height: 11.5rem;
  }
`

export const ContentVacancies = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 5rem 3rem;
`
