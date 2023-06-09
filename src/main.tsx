import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

import Home from './pages/Home'
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
