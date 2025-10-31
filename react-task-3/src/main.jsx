import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from './components/Header.jsx'
import Content from './components/Content.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Content />

  </StrictMode>,
)
