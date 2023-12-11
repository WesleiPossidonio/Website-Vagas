import styled from 'styled-components'

export const ContainerMeetings = styled.section`
  width: 100%;
  height: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  padding: 6rem 0;

  background-color: ${({ theme }) => theme.colors['bg-home']};

  > h1 {
    margin-bottom: 3rem;
  }
`

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  margin-bottom: 3rem;
`

export const Line = styled.div`
  width: 5rem;
  border-bottom: 3px solid ${({ theme }) => theme.colors['base-yellow']};
`

export const ContainerTitleImages = styled.div`
  max-width: 20rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  margin-bottom: 4rem;

  > h1 {
    cursor: pointer;
  }
`

interface ButtonsProps {
  nameEvent: boolean
}

export const ButtonImages = styled.button<ButtonsProps>`
  width: 8rem;
  height: 2.5rem;

  font-size: ${({ theme }) => theme.fontSizes['text-regular-s']};
  font-weight: 600;
  text-align: center;
  color: ${({ theme, nameEvent }) =>
    nameEvent ? theme.colors['base-black'] : theme.colors['base-text']};

  border: none;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  background-color: ${({ theme, nameEvent }) =>
    nameEvent ? theme.colors['base-yellow'] : theme.colors['bg-secundary']};

  transition: 0.2s ease-in-out;

  cursor: pointer;
`

export const ContainerImagens = styled.div`
  width: 100%;
  max-height: max-content;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 20rem));
  justify-content: center;
  gap: 2rem;
`

export const Images = styled.img`
  width: 100%;
  height: 15rem;

  object-fit: cover;

  border: none;
  border-radius: 6px;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  cursor: pointer;
`
