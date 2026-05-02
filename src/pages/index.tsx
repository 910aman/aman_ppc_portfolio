import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/index.css'
import '../css/styles.css'
import Home from '../views/Home'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
