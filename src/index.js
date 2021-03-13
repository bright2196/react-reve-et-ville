import React from 'react'
import ReactDOM from 'react-dom'
import App from './App/App.js'
import SongComp from './components/HeaderSondBotton/HeaderSondBotton'

ReactDOM.render(
  <React.StrictMode>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap');
      </style>
      <SongComp />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
)
