import styled from 'styled-components'

export const ContainerFooter = styled.div`
  width: 100%;
  max-height: max-content;

  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  padding: 3rem;

  background-color: ${({ theme }) => theme.colors['bg-home']};

  @media (max-width: 700px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 3.5rem;
  }
`
export const ContentLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.8rem;

  > img {
    width: 8rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors['base-yellow']};
    font-weight: 600;
  }
`
