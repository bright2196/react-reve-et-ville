import React from 'react'
import ReactDOM from 'react-dom'
import App from './App/App.js'
import SongComp from './components/HeaderSondBotton/HeaderSondBotton'

ReactDOM.render(
  <React.StrictMode>
      <SongComp />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
)
