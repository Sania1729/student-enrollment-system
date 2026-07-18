import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/global.css"
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
// import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
 <HashRouter>
    <App />
    <ToastContainer/>
</HashRouter>
  
)
