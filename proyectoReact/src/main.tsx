import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from './App'

createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
