import { SidebarProvider} from "@/components/ui/sidebar.jsx"
import { AppSidebar } from "@/components/layout/Sidebar.jsx"
import Header from "@/components/layout/Header.jsx"
 
export default function Layout({ children }) {
  return (
    <>
    <SidebarProvider>
      <AppSidebar />
      
        <div className="w-full">  

          <header  className="flex justify-between items-center m-4">
            < Header />
          </header>

          {children}

        </div>

        </SidebarProvider>
        
    </>
  )
}