import React from 'react'
import ReactDOM from 'react-dom'
import Inspect from 'inspx'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Inspect>
      <App />
    </Inspect>
  </React.StrictMode>,
  document.getElementById('root')
)
