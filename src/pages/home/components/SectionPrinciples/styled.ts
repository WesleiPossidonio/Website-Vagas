import styled from 'styled-components'

export const ContainerPrinciples = styled.section`
  width: 100%;
  height: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 8rem 4rem;

  background-color: ${({ theme }) => theme.colors['bg-home']};

  @media (max-width: 768px) {
    padding: 6rem 3rem;
  }
`

export const ContainerTitle = styled.div`
  max-width: 50%;
  align-self: center;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  text-align: center;
  margin-bottom: 2rem;
`

export const Line = styled.div`
  width: 7rem;
  border-bottom: 3.5px solid ${({ theme }) => theme.colors['base-yellow']};
  align-self: center;
  margin-bottom: 3rem;
`

export const ContainerCards = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 20rem));
  justify-content: center;
  gap: 6rem;

  margin-top: 1rem;

  @media (max-width: 768px) {
    gap: 3rem;
  }
`

export const Cards = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  padding: 0.8rem;
  border: none;
  border-radius: 8px;

  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors['base-yellow']};
    margin: 0.5rem -0.4rem;
  }

  &:hover {
    transition: 0.2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    > h1 {
      color: ${({ theme }) => theme.colors['bg-home']};
    }

    > p {
      color: ${({ theme }) => theme.colors['bg-secundary']};
    }

    background-color: ${({ theme }) => theme.colors['base-yellow']};

    svg {
      color: ${({ theme }) => theme.colors['bg-home']};
    }
  }
`
