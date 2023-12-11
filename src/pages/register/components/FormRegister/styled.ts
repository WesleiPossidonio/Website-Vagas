import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  margin-top: 2.5rem;
`

interface InputProps {
  error?: string
}

export const Input = styled.input<InputProps>`
  width: 100%;

  padding: 1rem;
  border: ${({ error }) => (error ? '1px solid red' : 'none')};
  border-radius: 4px;

  color: ${({ theme }) => theme.colors['base-input']};

  background-color: ${({ theme }) => theme.colors['bg-home']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-input']};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors['base-input']};
  }
`

export const ContainerInputsTypesFiles = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const Label = styled.label`
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: 1px solid ${({ theme }) => theme.colors['bg-home']};
  border-radius: 4px;
  padding: 0.7rem;

  font-size: 0.8125rem;

  color: ${({ theme }) => theme.colors['base-input']};

  background-color: ${({ theme }) => theme.colors['bg-home']};
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors['base-input']};
  }
`

export const TextArea = styled.textarea<InputProps>`
  width: 100%;
  height: 5.5rem;

  padding: 1rem;
  border: ${({ error }) => (error ? '1px solid red' : 'none')};
  border-radius: 4px;

  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors['base-input']};

  background-color: ${({ theme }) => theme.colors['bg-home']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-input']};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors['base-input']};
  }
`

export const InputFile = styled.input`
  display: none;
`

export const Button = styled.button`
  width: 100%;

  border: none;
  border-radius: 4px;
  padding: 1rem;
  margin-top: 1.2rem;

  font-size: 1rem;
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

export const ContainerTextRegister = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.3rem;

  font-size: ${({ theme }) => theme.fontSizes['text-regular-s']};
  font-weight: 600;

  color: ${({ theme }) => theme.colors['base-input']};

  .login {
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors['base-yellow']};
    }
  }
`
