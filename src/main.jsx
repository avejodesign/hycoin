import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyle from './styles/global'
import "./fonts/Oddval/oddval.woff"; 
import "./fonts/Oddval/oddval.woff2"; 

import Routes from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>
)
