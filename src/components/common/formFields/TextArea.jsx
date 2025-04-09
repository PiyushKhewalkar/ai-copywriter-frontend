import React from 'react'

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function TextArea({label, id, placeholder, value, onChange, required}) {
  return (

    <>
    
    <Label htmlFor={id} className="">
                  {label}
                </Label>
                <Textarea
                  id={id}
                  required = {required}
                  value={value}
                  onChange={onChange}
                  placeholder={placeholder}
                  className="col-span-3 resize-none"
                />
                
                </>
   
              

  )
}

export default TextArea