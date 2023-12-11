import styled from 'styled-components'

export const ContainerSection = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  background: rgba(0, 0, 0, 0.4);
`

export const Video = styled.video`
  width: 100vw;
  height: 100vh;
  object-fit: cover;

  z-index: -1;
`

export const ContainerText = styled.div`
  width: 35%;
  height: 18rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3rem;

  position: absolute;
  left: 2.5rem;

  padding: 2rem;
  border: none;
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  background: #000;

  @media (max-width: 768px) {
    width: 80%;
    padding: 1.2rem;
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  > div {
    width: 70%;
  }

  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    > div {
      width: 100%;
    }
  }
`

export const Button = styled.button`
  width: 6rem;
  height: 2.6rem;

  border: none;
  border-radius: 4px;

  font-size: ${({ theme }) => theme.fontSizes['text-regular-s']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors['base-black']};

  background-color: ${({ theme }) => theme.colors['base-yellow']};

  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 0%.5rem;
  }
`
