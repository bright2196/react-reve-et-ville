import React from 'react'
import ReactDOM from 'react-dom'
import styles from './index.scss'
import App from './App/App.js'
import Header from './components/Header/Header'

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
)
