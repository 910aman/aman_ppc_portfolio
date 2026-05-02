import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/index.css'
import '../css/styles.css'
import Gallery from '../views/Gallery'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Gallery />
  </StrictMode>,
)
