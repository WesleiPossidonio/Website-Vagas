import styled from 'styled-components'

import BgImage from '../../assets/BgImage.jpg'

export const ContainerSectionImages = styled.section`
  position: relative;
  height: 30rem;
  background: url(${BgImage}) center/cover no-repeat fixed;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #fff;

  > h1 {
    text-align: center;
    max-width: 70%;
    margin-bottom: 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: rgba(0, 0, 0, 0.2);
    z-index: -1;
  }
`
