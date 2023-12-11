import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    font-family: 'Montserrat', sans-serif;

    
}

html {



    @media (max-width: 1024px) {
    font-size: 87.5%;
  }
}
`
