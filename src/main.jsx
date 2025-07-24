import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './bootstrap.min.css'
import './index.css'
import { App } from './App.jsx'
import { BrowserRouter, Route } from 'react-router'
import { Routes } from 'react-router'
import { Home } from './pages/home.jsx'
import { Login } from './pages/Login.jsx'
import { About } from './pages/About.jsx'
import { Register } from './pages/Register.jsx'
import { Error404 } from './pages/Error404.jsx'
import { Services } from './pages/Services.jsx'
import { ServiceInner } from './pages/ServiceInner.jsx'
import { PublicTemplate } from './templates/PublicTemplate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<PublicTemplate />}>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Services/:service' element={<ServiceInner />} />
          <Route path='/About' element={<About />} />
          <Route path='/Register' element={<Register />} />

          <Route path='*' element={<Error404 />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
