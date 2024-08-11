import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Drilling from './pages/Drilling.jsx'
// import { BrowserRouter as Router } from 'react-router-dom' -> can name as router

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Drilling />
    </BrowserRouter>
  </StrictMode>,
)
