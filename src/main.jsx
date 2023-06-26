/*Este documento, é justamente onde se insere, por meio da reactDom, os elementos estruturais html, juntamente
com seus estilos*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Globalstyle from './styles/global'

import { AuthProvider } from './hooks/auth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Globalstyle />
        <AuthProvider>
          <Routes />
        </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)

//ThemeProvider: importação de styled-components, próprio para envolver projeto em algum tema, que pode-se
//ter vários filtros de cor, por exemplo, que podem ser acessados 
