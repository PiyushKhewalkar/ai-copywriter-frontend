import React from 'react'
import { Loader2 } from "lucide-react";
import { Button } from '../../ui/button';

function SubmitButton({label, loadingLabel, isLoading}) {
  return (
   <>
   {!isLoading ? (
                 <Button className='cursor-pointer w-full py-2 font-semibold' type="submit">{label}</Button>
               ) : (
                 <Button disabledn className='w-full py-2 font-semibold'>
                   <Loader2 className="animate-spin cursor-pointer" />
                   {loadingLabel}
                 </Button>
               )}
               
               </>
  )
}

export default SubmitButton