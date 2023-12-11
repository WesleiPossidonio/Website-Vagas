import styled from 'styled-components'

export const ContentCallAction = styled.div`
  width: 80%;
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.8);

  border-radius: 12px;

  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  > h1 {
    font-size: 1.8rem;
    max-width: 60%;
    text-align: center;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    width: 90%;
    > h1 {
      font-size: 1.6rem;
      max-width: 85%;
    }
  }

  @media (max-width: 500px) {
    > h1 {
      font-size: 1.3rem;
      max-width: 85%;
    }
  }
`

export const Button = styled.button`
  width: 18rem;
  height: 3.55rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors['base-text']};

  padding: 1rem;

  border: none;
  border-radius: 7px;

  background-color: ${({ theme }) => theme.colors['bg-home']};

  transition: 0.2s ease-in-out;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-yellow']};
    color: ${({ theme }) => theme.colors['base-black']};
  }

  &:active {
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    width: 15rem;
    font-size: 1rem;
  }
`
