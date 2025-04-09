import React from 'react'
import { Input } from '../../ui/input'
import { Label } from '../../ui/label'

function TextInput({label, id, placeholder, value, onChange, required}) {
  return (

    <>
    
                  <Label htmlFor={id} className="">
                    {label}
                  </Label>
                  <Input
                    id={id}
                    required = {required}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="col-span-3"
                  />

                  </>
           
  )
}

export default TextInput