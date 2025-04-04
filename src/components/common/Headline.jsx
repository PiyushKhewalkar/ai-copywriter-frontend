import React from 'react'
import {Button} from "@/components/ui/button.tsx"

import AvatarForm from './AvatarForm'

function Headline() {
  return (
    <div className='flex justify-between mx-5 my-10'>
        <h1 className='md:text-4xl text-2xl font-bold'>
            Dream Buyer Avatar
        </h1>
        <AvatarForm />
    </div>
  )
}

export default Headline