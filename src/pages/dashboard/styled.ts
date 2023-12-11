import styled from 'styled-components'

export const ContainerDashboard = styled.section`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 6%;
  padding-bottom: 0.5rem;

  background-color: ${({ theme }) => theme.colors['bg-secundary']};
`

export const ContentDashbordHome = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1023px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const MenuDashboard = styled.div`
  width: 4.5rem;
  min-height: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  align-self: flex-start;
  margin-top: 3rem;

  border: none;
  border-radius: 12px;
  padding: 1rem;

  background-color: ${({ theme }) => theme.colors['bg-home']};

  @media (max-width: 600px) {
    width: 90%;
    flex-direction: row;
    position: fixed;
    bottom: 0.5rem;
    gap: 1.5rem;
  }
`

export const LinkMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  svg {
    color: ${({ theme }) => theme.colors['base-input']};
    cursor: pointer;
  }

  p {
    display: none;
  }
`

export const ContainerDashbordHome = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

export const DataCompany = styled.div`
  width: 42%;
  height: 35rem;

  border: none;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-color: ${({ theme }) => theme.colors['bg-home']};

  > img {
    border-radius: 20px 20px 0 0;
    height: 30%;
    object-fit: cover;
  }

  @media (max-width: 1023px) {
    width: 100%;
  }
`

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center center;

  border-radius: 8px;
`

interface BoxImageLogoProps {
  stateMenu?: boolean
}

export const BoxImageLogo = styled.div<BoxImageLogoProps>`
  width: 5.5rem;
  height: 5.5rem;

  margin-bottom: 1rem;

  margin-top: -9%;
  padding: 0.6rem;

  border: 4px solid ${({ theme }) => theme.colors['base-input']};
  border-radius: 16px;

  background-color: ${({ theme }) => theme.colors['bg-home']};
`

export const ContentDataCompany = styled.div`
  width: 100%;
  height: 19rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  gap: 0.7rem;

  padding: 1.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`
export const ContentCompany = styled.div`
  width: 58%;
  height: 33rem;

  border: none;
  border-radius: 30px;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors['bg-home']};

  @media (max-width: 1023px) {
    width: 100%;
  }
`

export const Button = styled.button`
  width: 12rem;
  height: 3rem;

  border: none;
  border-radius: 4px;

  font-size: ${({ theme }) => theme.fontSizes['text-regular-s']};
  font-weight: 600;

  margin-top: 0.9rem;

  color: ${({ theme }) => theme.colors['bg-home']};
  background-color: ${({ theme }) => theme.colors['base-input']};

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`
