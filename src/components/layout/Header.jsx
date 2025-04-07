import React from 'react'

import {SidebarTrigger } from "@/components/ui/sidebar.jsx"

function Header() {
  return (
    <div className="flex items-center space-x-2">
              <SidebarTrigger />
              <p>Project M</p>
    </div>
  )
}

export default Header