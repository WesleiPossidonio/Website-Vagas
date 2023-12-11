import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  margin-top: 4rem;

  p {
    > span {
      cursor: pointer;
    }
  }
`

export const TextRegister = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.3rem;

  margin-top: -0.2rem;

  font-size: ${({ theme }) => theme.fontSizes['text-regular-s']};
  color: ${({ theme }) => theme.colors['base-text']};
  font-weight: 600;

  .signUp {
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors['base-yellow']};
    }
  }
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
