import React from 'react'
import { Loader2 } from "lucide-react";
import { Button } from '../../ui/button';

function SubmitButton({label, loadingLabel, isLoading}) {
  return (
   <>
   {!isLoading ? (
                 <Button className='cursor-pointer' type="submit">{label}</Button>
               ) : (
                 <Button disabled>
                   <Loader2 className="animate-spin cursor-pointer" />
                   {loadingLabel}
                 </Button>
               )}
               
               </>
  )
}

export default SubmitButton