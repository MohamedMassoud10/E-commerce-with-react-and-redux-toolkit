import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider, ProviderProps } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from "./store"
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  </React.StrictMode>
)


