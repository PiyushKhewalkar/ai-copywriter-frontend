import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//pages
import Avatars from './pages/Avatars.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AvatarDetails from  "./pages/AvatarDetails.jsx"

// router
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {path : "/dashboard", element: <Dashboard />},
  {path : "/dashboard/avatars", element: <Avatars />},
  {path : "/dashboard/avatars/:id", element: <AvatarDetails />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
