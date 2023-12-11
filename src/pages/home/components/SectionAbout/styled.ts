import styled from 'styled-components'

export const ContainerAbout = styled.section`
  width: 100%;
  height: max-content;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  padding: 8rem 4rem;

  background-color: ${({ theme }) => theme.colors['bg-home']};

  @media (max-width: 940px) {
    flex-wrap: wrap;
    padding: 6rem 2rem;
  }

  @media (max-width: 600px) {
    padding: 6rem 1.5rem;
  }
`
export const ContentText = styled.div`
  max-width: 50%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;

  .TextTwo {
    margin-top: 0.5rem;
  }

  @media (max-width: 940px) {
    max-width: 100%;
  }
`

export const Span = styled.span`
  font-size: ${({ theme }) => theme.fontSizes['title-regular-l']};
  color: ${({ theme }) => theme.colors['base-yellow']};
  font-weight: 700;
`

export const ContainerImages = styled.div`
  width: 50%;
  height: 22rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border: none;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors['base-yellow']};

  position: relative;

  @media (max-width: 940px) {
    width: 75%;
  }

  @media (max-width: 600px) {
    display: none;
  }
`

export const ContentImage = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 2rem;
  right: 2.2rem;

  background-color: ${({ theme }) => theme.colors['bg-secundary']};
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const AboutText = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`

export const LinkAbout = styled.a`
  width: 11rem;
  height: 2.7rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 4px;

  font-size: ${({ theme }) => theme.fontSizes['text-regular-l']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors['bg-home']};
  margin-top: 2rem;

  background-color: ${({ theme }) => theme.colors['base-yellow']};

  text-decoration: none;

  &:hover {
    transition: 0.2s ease-in-out;
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`
