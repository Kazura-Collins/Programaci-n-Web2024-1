import './style.css'
import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './components/App'

const appContainer = document.getElementById('app')
const root = createRoot(appContainer)


root.render(
  <App/>
  )

console.log("Hello darkness my old friend")
