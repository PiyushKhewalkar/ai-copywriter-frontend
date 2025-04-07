import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//pages
import Avatars from './pages/Avatars.jsx'
import DashboardHome from './pages/DashboardHome.jsx'
import AvatarDetails from  "./pages/AvatarDetails.jsx"
import CampaignForm from './pages/CampaignForm.jsx'

import Products from './pages/Products.jsx'

// router
import {createBrowserRouter, RouterProvider} from "react-router-dom"


const router = createBrowserRouter([
  {path : "/ai-copywriter-frontend/dashboard", element: <DashboardHome />},
  {path : "/ai-copywriter-frontend/dashboard/avatars", element: <Avatars />},
  {path : "/ai-copywriter-frontend/dashboard/avatars/:id", element: <AvatarDetails />},
  {path : "/ai-copywriter-frontend/dashboard/products", element : <Products/>},
  {path : "/ai-copywriter-frontend/dashboard/campaign/new", element : <CampaignForm/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
