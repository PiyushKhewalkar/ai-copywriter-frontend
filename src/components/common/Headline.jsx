import React from 'react'
import {Button} from "@/components/ui/button.tsx"

import AvatarForm from './AvatarForm'
import ProductForm from '../products/ProductForm'

function Headline({heading, formType}) {
  return (
    <div className='flex justify-between mx-5 my-10'>
        <h1 className='md:text-4xl text-2xl font-bold'>
            {heading}
        </h1>
        {formType === "avatar" ? <AvatarForm /> : <ProductForm/>}
    </div>
  )
}

export default Headline