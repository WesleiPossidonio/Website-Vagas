import styled from 'styled-components'

export const ContainerContact = styled.section`
  width: 100%;
  max-height: max-content;

  padding: 5rem 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

  background-color: ${({ theme }) => theme.colors['bg-home']};

  @media (max-width: 768px) {
    padding: 5rem 1.5rem;
  }
`
export const ContentContact = styled.div`
  width: 100%;
  max-width: 130rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  margin-top: 5rem;

  @media (max-width: 768px) {
    h1 {
      font-size: ${({ theme }) => theme.fontSizes['title-regular-s']};
    }
  }

  @media (max-width: 668px) {
    flex-wrap: wrap;
    gap: 4rem;
  }
`

export const ContentText = styled.div`
  width: 50%;
  align-self: flex-start;

  > h1 {
    margin-bottom: 0.5rem;
  }

  > p {
    margin-bottom: 1.2rem;
  }

  @media (max-width: 668px) {
    width: 100%;
  }
`

export const Form = styled.form`
  width: 50%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 668px) {
    width: 100%;
  }
`

export const ButtonContact = styled.a`
  width: 10rem;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  border: none;
  border-radius: 4px;

  font-size: 1rem;
  font-weight: 600;

  background-color: ${({ theme }) => theme.colors['base-yellow']};

  cursor: pointer;
`
export const TextArea = styled.textarea`
  width: 100%;
  height: 5rem;

  padding: 0.8rem;

  border: none;
  border-radius: 8px;

  font-weight: 400;
  font-size: 0.8835125rem;
  line-height: 1.3125rem;

  color: ${({ theme }) => theme.colors['base-input']};

  background: ${({ theme }) => theme.colors['bg-secundary']};

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors['base-yellow']};
    border-radius: 8px;
  }
`

export const SendButton = styled.button`
  width: 13rem;
  height: 3.2rem;

  border: none;
  border-radius: 4px;

  font-size: 1.3rem;
  font-weight: 700;

  background-color: ${({ theme }) => theme.colors['base-yellow']};

  cursor: pointer;
`
