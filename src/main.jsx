import { StrictMode } from 'react'
import { createRoot, ReactDOM} from 'react-dom/client'
import Home from './pages/Home/Home.jsx'
import Service from './pages/Services/Service.jsx'
import AboutUs from './pages/AboutUs/AboutUs.jsx'
import Contact from './pages/Contact/Contact.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LangProvider } from './context/LangContext.jsx'


const route = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/service',
    element: <Service />
  },
  {
    path: '/aboutus',
    element: <AboutUs />
  },
  {
    path: '/contact',
    element: <Contact />
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangProvider>
      <RouterProvider router={route} />
    </LangProvider>
  </StrictMode>
)