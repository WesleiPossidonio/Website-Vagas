import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import { AppProvider } from './contexts'
import { Router } from './routes/routes'
import { GlobalStyled } from './styles/globalStyle'
import { DefaultThemes } from './styles/theme/default'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={DefaultThemes}>
          <AppProvider>
            <ToastContainer theme="dark" />
            <GlobalStyled />
            <Router />
          </AppProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
