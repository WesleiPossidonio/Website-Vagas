import styled from 'styled-components'

export const ContainerVacancies = styled.main`
  width: 100%;
  height: 100vh;
  max-height: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-color: ${({ theme }) => theme.colors['bg-home']};
`

export const HeaderVacancies = styled.header`
  width: 100%;
  height: 6rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: ${({ theme }) => theme.colors['bg-home']};
  > p {
    cursor: pointer;
  }
`

export const ContentData = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  > img {
    width: 18rem;
    margin-top: 6rem;
  }
`

export const ContentDataVacancies = styled.div`
  width: 100%;
  height: 10rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 4rem;

  background-color: ${({ theme }) => theme.colors['bg-secundary']};

  > form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    > div {
      width: 22rem;
    }
  }

  @media (max-width: 670px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;

    padding: 1.5rem;

    > form {
      width: 100%;
    }

    input {
      flex: 1;
    }

    button {
      margin-top: 0;
    }
  }
`

export const ContentVacancies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
`

export const ContainerListVacancies = styled.div`
  width: 100%;
  max-height: max-content;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 25rem));
  justify-content: center;
  gap: 2rem;

  margin-top: 4rem;
  padding: 1.5rem;
`

export const CardVacancies = styled.div`
  width: 100%;
  height: 15rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;

  padding: 1.5rem;
  border: none;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors['bg-secundary']};
`

export const HeaderCard = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    width: 3rem;

    border: none;
    border-radius: 10px;
  }
`

export const ContentCard = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.8rem;
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const FooterCard = styled.div``
