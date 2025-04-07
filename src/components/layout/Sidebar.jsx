import { Calendar, User, Package } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { Link } from "react-router-dom"

const baseLink = "ai-copywriter-frontend/dashboard"

// Menu items.
const items = [
  {
    title: "Explore",
    url: "/",
    icon: User,
    isActive: true,
    navigate: "/"
  },
  {
    title: "Dream Buyer Avatar",
    url: "/avatars",
    icon: User,
  },
  {
    title: "Products Or Services",
    url: "/products",
    icon: Package,
  },
  {
    title: "Campaigns",
    url: "/campaigns",
    icon: Calendar,
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="">
          <h3 className="p-2 font-bold">Project M</h3>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Discover</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="py-5" asChild isActive={item.isActive} >
                    <a href={item.url} className="md:text-[16px]">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
