import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'

'use strict';


chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
  const [activeTab] = tabs
  ReactDOM.render(
    <App />,
    document.getElementById('devtools-root')
  )
})

