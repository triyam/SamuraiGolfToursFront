import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { createRoot } from 'react-dom/client'
import * as serviceWorker from './serviceWorker'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = createRoot(document.getElementById('root'))

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
)

// If you want to enable client cache, register instead.
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
