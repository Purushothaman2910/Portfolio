import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Portfolio from './Portfolio'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Portfolio />
    </BrowserRouter>
  </StrictMode>,
)
