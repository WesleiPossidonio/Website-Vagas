import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin-top: 3rem;
`

export const ContentInputs = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.2rem;

  margin-top: 1.5rem;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`

interface InputProps {
  error?: string
}

export const Input = styled.input<InputProps>`
  width: 100%;

  padding: 0.9rem;
  border: ${({ error }) => (error ? '1px solid red' : 'none')};
  border-radius: 4px;

  color: ${({ theme }) => theme.colors['base-input']};

  background-color: ${({ theme }) => theme.colors['bg-secundary']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-input']};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors['base-input']};
  }
`

export const TextArea = styled.textarea<InputProps>`
  width: 100%;
  height: 4rem;

  padding: 1rem;
  border: ${({ error }) => (error ? '1px solid red' : 'none')};
  border-radius: 4px;

  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors['base-input']};

  background-color: ${({ theme }) => theme.colors['bg-secundary']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-input']};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors['base-input']};
  }
`
export const Button = styled.button`
  width: 25%;

  align-self: flex-end;
  margin-right: 10%;

  border: none;
  border-radius: 4px;
  padding: 0.7rem;
  margin-top: 1.2rem;

  font-size: 0.875rem;
  font-weight: bold;

  background-color: ${({ theme }) => theme.colors['base-input']};

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.7;
  }
`
