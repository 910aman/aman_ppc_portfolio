import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/index.css'
import '../css/styles.css'
import Contact from '../views/Contact'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Contact />
  </StrictMode>,
)
