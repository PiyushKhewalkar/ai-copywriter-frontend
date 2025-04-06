import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//pages
import Avatars from './pages/Avatars.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AvatarDetails from  "./pages/AvatarDetails.jsx"

import Products from './pages/Products.jsx'

// router
import {createBrowserRouter, RouterProvider} from "react-router-dom"


const router = createBrowserRouter([
  {path : "/ai-copywriter-frontend/dashboard", element: <Dashboard />},
  {path : "/ai-copywriter-frontend/dashboard/avatars", element: <Avatars />},
  {path : "/ai-copywriter-frontend/dashboard/avatars/:id", element: <AvatarDetails />},
  {path : "/ai-copywriter-frontend/dashboard/products", element : <Products/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
