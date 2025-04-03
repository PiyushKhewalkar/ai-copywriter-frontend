import React from 'react'
import {Input} from "@/components/ui/input.tsx"
import {Button} from '@/components/ui/button.tsx'

function Searchbar({searchTerm, setSearchTerm}) {
  return (
   
   <div className='flex space-x-3 mx-5 mt-10'>
     <Input className = "py-5" placeholder="Search avatar" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
     <Button className="py-5 cursor-pointer" variant="outline">Search</Button>

   </div>

  )
}

export default Searchbar