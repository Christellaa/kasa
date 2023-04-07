import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/style.scss'
import Home from './pages/Home.jsx'
import Housings from './pages/Housings.jsx'
import About from './pages/About.jsx'
import Error from './pages/Error.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/housing/:id',
    element: <Housings />,
  },
  {
    path: '/about',
    element: <About />,
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
