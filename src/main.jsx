import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//pages
import Avatars from './pages/Avatars/Avatars.jsx'
import DashboardHome from './pages/DashboardHome.jsx'
import AvatarDetails from  "./pages/Avatars/AvatarDetails.jsx"
import CampaignForm from './pages/Campaigns/CampaignForm.jsx'
import Campaigns from './pages/Campaigns/Campaigns.jsx'

import Products from './pages/Products/Products.jsx'

// router
import {createBrowserRouter, RouterProvider} from "react-router-dom"


const router = createBrowserRouter([
  {path : "/ai-copywriter-frontend/dashboard", element: <DashboardHome />},
  {path : "/ai-copywriter-frontend/dashboard/avatars", element: <Avatars />},
  {path : "/ai-copywriter-frontend/dashboard/avatars/:id", element: <AvatarDetails />},
  {path : "/ai-copywriter-frontend/dashboard/products", element : <Products/>},
  {path : "/ai-copywriter-frontend/dashboard/campaigns/new", element : <CampaignForm/>},
  {path : "/ai-copywriter-frontend/dashboard/campaigns", element : <Campaigns/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
