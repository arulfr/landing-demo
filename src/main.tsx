import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Style.css';
import AppNew from './AppNew.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppNew />
  </StrictMode>
)
