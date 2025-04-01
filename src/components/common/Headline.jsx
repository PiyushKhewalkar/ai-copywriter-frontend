import React from 'react'
import {Button} from "@/components/ui/button.tsx"

function Headline() {
  return (
    <div className='flex justify-between mx-5 my-10'>
        <h1 className='md:text-4xl text-2xl font-bold'>
            Dream Buyer Avatar
        </h1>
        <Button className="cursor-pointer py-5">
            + Create Avatar
        </Button>
    </div>
  )
}

export default Headline