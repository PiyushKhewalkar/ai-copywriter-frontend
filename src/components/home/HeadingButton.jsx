import React from 'react'
import {Button} from "../ui/button.jsx"
import ProductForm from '../products/ProductForm.jsx'
import AvatarForm from '../avatars/AvatarForm.jsx'

import { Link } from 'react-router-dom'

function HeadingButton({heading, form}) {
  return (
    <>
    <div className='flex justify-between mt-10 mb-5 mx-5 items-center'>
    <h3 className='md:text-4xl text-2xl font-bold'>{heading}</h3>
    {form==="product" ? <ProductForm /> : <Link to={"http://localhost:5173/ai-copywriter-frontend/dashboard/campaigns/new"}><Button className='cursor-pointer'>+ New Campaign</Button></Link>}
    </div>
    </>
  )
}

export default HeadingButton