import React from 'react'
import {Button} from "../ui/button.jsx"
import ProductForm from '../products/ProductForm.jsx'
import AvatarForm from '../common/AvatarForm.jsx'

function HeadingButton({heading, form}) {
  return (
    <>
    <div className='flex justify-between mt-10 mb-5 mx-5 items-center'>
    <h3 className='md:text-2xl text-xl font-semibold'>{heading}</h3>
    {form==="product" ? <ProductForm /> : <Button>+ New Campaign</Button>}
    </div>
    </>
  )
}

export default HeadingButton