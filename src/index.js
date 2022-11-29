import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider, ProviderProps } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from "./Store"
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)


